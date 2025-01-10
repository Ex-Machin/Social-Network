import { InjectedFormProps, reduxForm } from "redux-form";
import { ProfileType } from "../../../types/types";
import styles from "../../FormsControl/FormControls.module.css";
import { createField, GetStringKeys, Input, TextArea } from "../../FormsControl/FormsControl";
import s from "./ProfileInfo.module.css";

type ProfileDataFormValuesType = {
  profile: ProfileType
  handleSubmit: () => void
  error: string
}
type PropsType = {}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfielDataForm: React.FC<InjectedFormProps<ProfileDataFormValuesType, PropsType> & PropsType> = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div className={styles["form-summary-error"]}>{error}</div>}
      <div>
        <b>Full name</b> :
        {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job </b>
        {createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>Skills </b>
        {createField<ProfileTypeKeys>("My professionals skills", "lookingForAJobDescription", [], TextArea)}
      </div>
      <div>About Me</div>
      {createField<ProfileTypeKeys>("About me", "aboutMe", [], TextArea)}
      <div>
        <b>Contacts : </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>{key}</b>
              {/* todo create some validation for embedded objecst */}
              {createField(key, "contacts." + key, [], Input)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfielDataFormReduxForm = reduxForm<ProfileDataFormValuesType>({ form: "editProfile" })(
  ProfielDataForm
);

export default ProfielDataFormReduxForm;
