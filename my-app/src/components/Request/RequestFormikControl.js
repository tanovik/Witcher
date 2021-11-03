import React from "react";
import { Field, ErrorMessage } from "formik";
import cn from "classnames";

export const RequestFormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <InputFormik {...rest} />;
    case "select":
      return <SelectFormik {...rest} />;

    default:
      return null;
  }
};

const InputFormik = (props) => {
  const { label, name, placeholder, errors, touched, ...rest } = props;

  return (
    <div>
      <label htmlFor={name}></label>
      <Field
        id={name}
        name={name}
        placeholder={placeholder}
        className={touched && errors ? "invalid" : ""}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

const SelectFormik = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name} className="selectForm"></label>
      <Field className="selectForm" as="select" id={name} name={name} {...rest}>
        {!!options &&
          options.map((option) => {
            return (
              <option
                key={option.value}
                value={option.value}
                className="select_option"
              >
                {option.key}{" "}
              </option>
            );
          })}
      </Field>
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
