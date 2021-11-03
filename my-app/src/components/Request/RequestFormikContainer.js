import React, { useRef } from "react";
import paperclip from "../../images/paperclip.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { RequestFormikControl, TextError } from "./RequestFormikControl";
import { NavLink } from "react-router-dom";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  city: Yup.string().required("Город не выбран"),
  name: Yup.string().required("Поле не заполнено"),
  remark: Yup.string().required("Поле не заполнено"),
  email: Yup.string()
    .email("Email должен содержать @")
    .required("Поле не заполнено"),
  toggle: Yup.array().min(1, "Поле не заполнено"),
  number: Yup.string()
    .required("Поле не заполнено")
    .matches(phoneRegExp, "Неверный формат")
    .min(5, "Слишком короткий номер")
    .max(15, "Слишком длинный номер"),
});

export default function RequestFormikContainer(props) {
  const cityOptions = [
    { key: "Выберите город", value: "" },
    { key: "Москва", value: "Москва" },
    { key: "Санкт-Петербург", value: "Санкт-Петербург" },
    { key: "Казань", value: "Казань" },
    { key: "Краснодар", value: "Краснодар" },
    { key: "Ростов-на-Дону", value: "Ростов-на-Дону" },
  ];

  return (
    <div>
      <div className="request_title">
        <h1>Оставьте заявку</h1>
      </div>
      <div>
        <Formik
          enableReinitialize={true}
          initialValues={{
            city: "",
            name: "",
            email: "",
            number: "",
            remark: "",
            file: "",
            toggle: [],
          }}
          validationSchema={validationSchema}
          onSubmit={(values, onSubmitProps) => {
            onSubmitProps.setSubmitting(false);
            console.log(values);
          }}
        >
          {({ errors, touched, values, setFieldValue, isValid }) => {
            return (
              <Form>
                <div className="form_input_wrapper">
                  <RequestFormikControl
                    control="select"
                    type="select"
                    label="city"
                    name="city"
                    options={cityOptions}
                    className="form_input"
                    errors={errors}
                    touched={touched}
                  />
                </div>

                <div className="form_input_wrapper">
                  <RequestFormikControl
                    control="input"
                    type="name"
                    label="name"
                    name="name"
                    placeholder={"Имя"}
                    className="form_input"
                  />
                </div>
                <div className="form_input_inline_group">
                  {/* <div > */}
                  <RequestFormikControl
                    control="input"
                    type="email"
                    label="email"
                    name="email"
                    placeholder={"Email"}
                    className="form_input_half"
                  />
                  <RequestFormikControl
                    control="input"
                    label="number"
                    name="number"
                    placeholder={"+7(___)__-__-___"}
                    className="form_input_half"
                  />
                </div>
                <div className="form_textArea_wrapper">
                  <Field
                    className="form_textArea"
                    name="remark"
                    label="remark"
                    placeholder={"Оставьте пометку к заказу"}
                  />
                  <ErrorMessage name="remark" component={TextError} />
                </div>

                <div>
                  <div className="form_file">
                    <label for="file">
                      {values.file.name ? (
                        <p>{values.file.name}</p>
                      ) : (
                        <p>Прикрепите файл</p>
                      )}
                    </label>
                    <label class="custom_file_upload">
                      <input
                        id="file"
                        name="file"
                        type="file"
                        onChange={(event) => {
                          setFieldValue("file", event.currentTarget.files[0]);
                        }}
                      />

                      <img
                        src={paperclip}
                        alt="paperclip"
                        className="paperclip"
                      />
                    </label>
                  </div>
                  <div>{touched.file ? <p>hyju</p> : null}</div>

                  <ErrorMessage name="file" component={TextError} />

                  <div className="checkbox_wrapper">
                    <label class="checkbox_container">
                      <Field type="checkbox" name="toggle" value="Checked" />
                      <p>
                        {"Даю согласие на обработку своих персональных данных"}
                      </p>
                      <span class="checkmark"></span>
                    </label>
                    <ErrorMessage name="toggle" component={TextError} />
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={props.goToRequestIsSent}
                      disabled={
                        Object.keys(touched).length !== 0 ? !isValid : "true"
                      }
                      className={
                        Object.keys(touched).length === 0 || isValid === false
                          ? "button_dis"
                          : "button"
                      }
                    >
                      Оставить заявку
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
