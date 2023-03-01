import React from "react";
import { Field, ErrorMessage } from "formik";

export const InputFormik = (props) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}></label>
      <Field id={name} name={name} placeholder={placeholder} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export const TextError = (props) => {
  return (
    <div className="form_error_wrapper">
      <div className="form_error">{props.children}</div>
    </div>
  );
};
