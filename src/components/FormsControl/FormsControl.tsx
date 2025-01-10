import React from 'react';
import { Field, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from "../../utils/validators/validators";
import styles from "./FormControls.module.css";

interface FromControlProps extends WrappedFieldProps {
  children: React.ReactNode;
}

const FromControl: React.FC<FromControlProps> = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error;

  return (
    <div className={styles["form-control"] + " " + (hasError && styles.error)}>
      <div>{children}</div>
      <div>{hasError && <span> {error}</span>}</div>
    </div>
  );
};


export const TextArea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props
  return (
    <FromControl {...props}>
      <textarea {...input} {...restProps} />
    </FromControl>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props
  return (
    <FromControl {...props}>
      <input {...input} {...restProps} />
    </FromControl>
  );
};

export function createField<T extends string | undefined>(placeholder: string | undefined,
  name: T,
  validators: Array<FieldValidatorType>,
  component: React.FC<WrappedFieldProps>,
  props = {},
  text = "") {
  return (

    (
      <div>
        <Field placeholder={placeholder} name={name}
          validate={validators}
          component={component}
          {...props} />
      </div>
    )
  )
}

export type GetStringKeys<T> =  Extract<keyof T, string>