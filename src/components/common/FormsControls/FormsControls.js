import React from 'react';
import styles from './FormControls.module.css';
import { Field, ErrorMessage } from 'formik';

export const Element =
  (Element) =>
  ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div
        className={styles.formControl + ' ' + (hasError ? styles.error : '')}
      >
        <Element {...input} {...props} />
        {hasError && <span> {meta.error} </span>}
      </div>
    );
  };

export const FormField = (props) => {
  const { label, name, as, placeholder, type } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <Field {...props}>
        {(props) => {
          return (
            <Field
              as={as}
              type={type}
              id={name}
              name={name}
              placeholder={placeholder}
              className={
                props.meta.touched && props.meta.error ? styles.formControlError : ''
              }
            />
          );
        }}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export const TextError = (props) => {
  return <div className={styles.error}>{props.children}</div>;
};
