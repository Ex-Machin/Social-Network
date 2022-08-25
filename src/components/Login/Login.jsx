import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../FormsControl/FormsControl";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import styles from '../FormsControl/FormControls.module.css';

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[required]}
          type="password"
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />
        remember me
      </div>
      {error && (
        <div className={styles["form-summary-error"]}>{error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = ({ email, password, rememberMe }) => {
    props.login(email, password, rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login);
