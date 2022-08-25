import styles from "./FormControls.module.css";

const FromControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;

  return (
    <div className={styles["form-control"] + " " + (hasError && styles.error)}>
      <div>{children}</div>
      <div>{hasError && <span> {error}</span>}</div>
    </div>
  );
};

export const TextArea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FromControl {...props}>
      <textarea {...input} {...restProps} />
    </FromControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FromControl {...props}>
      <input {...input} {...restProps} />
    </FromControl>
  );
};
