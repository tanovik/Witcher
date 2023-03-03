import paperclip from "../../assets/images/paperclip.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextError, InputFormik } from "./InputFormik";
import { useState } from "react";
import CitySelect from "./CitySelect";


const validationSchema = Yup.object().shape({
  city: Yup.object()
    .shape({
      value: Yup.string(),
      label: Yup.string(),
    })
    .required("Поле не заполнено")
    .nullable(),
  name: Yup.string().required("Поле не заполнено"),
  remark: Yup.string().required("Поле не заполнено"),
  email: Yup.string()
    .email("Email должен содержать @ и имя домена")
    .required("Поле не заполнено"),
  number: Yup.number().required("Поле не заполнено"),
  file: Yup.array().min(1, "Поле не заполнено"),
  toggle: Yup.array().min(1, "Поле не заполнено"),
});


export default function RequestFormikContainer(props) {
  const [labelValue, setLabelValue] = useState(["Прикрепите файл (до 3 шт.)"]);
  return (
    <div>
      <h1>Оставьте заявку</h1>
      <div>
        <Formik
          enableReinitialize={true}
          initialValues={{
            city: null,
            name: "",
            email: "",
            number: "",
            remark: "",
            file: [],
            toggle: [],
          }}
          validationSchema={validationSchema}
          onSubmit={(values, formikBag) => {
            console.log("values", values);
            formikBag.setTouched(true);
            formikBag.setSubmitting(false);
            props.goToRequestIsSent();
          }}
        >
          {({ errors, touched, values, setFieldValue, setTouched }) => {
            return (
              <Form>
                <div className="select_wrapper">
                  <CitySelect
                    name="city"
                    error={errors.city}
                    touched={touched}
                    value={values.city}
                    setFieldValue={setFieldValue}
                    setTouched={setTouched}
                  />
                  <ErrorMessage name={"city"} component={TextError} />
                </div>
                <div className="form_input_wrapper">
                  <InputFormik
                    type="name"
                    label="name"
                    name="name"
                    placeholder={"Имя"}
                    className={
                      touched.name && errors.name
                        ? "form_input invalid"
                        : "form_input valid"
                    }
                  />
                </div>
                <div className="form_input_inline_group">
                  <div>
                    <InputFormik
                      type="email"
                      label="email"
                      name="email"
                      placeholder={"Email"}
                      className={
                        touched.email && errors.email
                          ? "form_input invalid"
                          : "form_input valid"
                      }
                    />
                  </div>
                  <div>
                    <InputFormik
                      label="number"
                      name="number"
                      placeholder={"+7(___)__-__-___"}
                      className={
                        touched.number && errors.number
                          ? "form_input invalid"
                          : "form_input valid"
                      }
                    />
                  </div>
                </div>
                <div className="form_textArea_wrapper">
                  <InputFormik
                    label="remark"
                    name="remark"
                    placeholder={"Оставьте пометку к заказу"}
                    errors={errors}
                    touched={touched}
                    className={
                      touched.remark && errors.remark
                        ? "form_textArea invalid"
                        : "form_textArea valid"
                    }
                  />
                </div>
                <div className="form_file_wrapper">
                  <div
                    className={
                      touched.file && errors.file
                        ? "form_file invalid"
                        : "form_file valid"
                    }
                    tabIndex={0}
                    onBlur={(e) => {
                      setTouched({ ...touched, file: true });
                    }}
                  >
                    <label htmlFor="file">
                      {labelValue.map((elem) => (
                        <span key={elem}>{elem}</span>
                      ))}
                      <input
                        id="file"
                        name="file"
                        type="file"
                        onChange={(event) => {
                          let file = event.target.files[0];
                          if (file) {
                            setLabelValue(
                              [
                                ...labelValue.filter(
                                  (item) =>
                                    item !== "Прикрепите файл (до 3 шт.)"
                                ),
                                file.name,
                              ].slice(0, 3)
                            );
                            let currentFilesCopy = values.file.slice(0); // to get a copy of the original array
                            currentFilesCopy.push(file);
                            setFieldValue("file", currentFilesCopy);
                            setTouched({ ...touched, file: true });
                          }
                        }}
                      />
                      <img
                        src={paperclip}
                        alt="paperclip"
                        className="paperclip"
                      />
                    </label>
                  </div>
                  <ErrorMessage name="file" component={TextError} />
                </div>
                <div className="checkbox_wrapper">
                  <label className="checkbox_container">
                    <Field type="checkbox" name="toggle" value="Checked" />
                    <p>
                      {"Даю согласие на обработку своих персональных данных"}
                    </p>
                    <span
                      className={
                        touched.toggle && errors.toggle
                          ? "checkmark invalid"
                          : "checkmark valid"
                      }
                      tabIndex={0}
                      onBlur={(e) => {
                        setTouched({ ...touched, toggle: true });
                      }}
                    ></span>
                  </label>
                  <ErrorMessage name="toggle" component={TextError} />
                </div>
                <div>
                  <button type="submit" className={"button_default_red"}>
                    Оставить заявку
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
