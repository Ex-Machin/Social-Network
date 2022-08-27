import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, TextArea } from "../../FormsControl/FormsControl";
import s from "./ProfileInfo.module.css";
import styles from "../../FormsControl/FormControls.module.css";

const ProfielDataForm = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div className={styles["form-summary-error"]}>{error}</div>}
      <div>
        <b>Full name</b> :
        <Field placeholder="Full name" name="fullName" component={Input} />
      </div>
      <div>
        <b>Looking for a job </b>
        <Field name="lookingForAJob" component={Input} type={"checkbox"} />
      </div>
      <div>
        <b>Skills </b>
        <Field
          placeholder="My professionals skills"
          name="lookingForAJobDescription"
          component={TextArea}
        />
      </div>
      <div>About Me</div>
      <Field name="aboutMe" component={Input} />
      <div>
        <b>Contacts : </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>{key}</b>
              <Field name={"contacts." + key} component={Input} />
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfielDataFormReduxForm = reduxForm({ form: "editProfile" })(
  ProfielDataForm
);

export default ProfielDataFormReduxForm;
