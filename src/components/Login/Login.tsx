import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AnyAction } from "redux";
import { InjectedFormProps, reduxForm } from "redux-form";
import { ThunkDispatch } from "redux-thunk";
import { login } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { required } from "../../utils/validators/validators";
import styles from '../FormsControl/FormControls.module.css';
import { createField, GetStringKeys, Input } from "../FormsControl/FormsControl";

type LoginFormOwnProps = {
  captchaUrl: string | null
}
type LoginFormOwnPropsKeys = GetStringKeys<LoginFormOwnProps>

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormOwnPropsKeys>("Email", "email", [required], Input)}
      {createField<LoginFormOwnPropsKeys>("Password", "password", [required], Input, { type: "password" })}
      {createField<LoginFormOwnPropsKeys>(undefined, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

      {captchaUrl && <img src={captchaUrl} alt="" />}
      {captchaUrl && createField<LoginFormOwnPropsKeys>("Symbols from image", "captcha", [required], Input, {})}

      {error && <div className={styles["form-summary-error"]}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: "login" })(LoginForm);

type LoginFormValuesType = {
  captcha: string
  rememberMe: boolean
  password: string
  email: string
}

const LoginPage: React.FC = () => {
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const dispatch: ThunkDispatch<AppStateType, unknown, AnyAction> = useDispatch()

  const onSubmit = ({ email, password, rememberMe, captcha }: any) => {
    dispatch(login(email, password, rememberMe, captcha))
  };

  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

export default LoginPage
