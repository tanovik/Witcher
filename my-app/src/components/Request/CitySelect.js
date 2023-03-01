import Select from "react-select";

const cityOptions = [
  { label: "Москва", value: "Москва" },
  { label: "Санкт-Петербург", value: "Санкт-Петербург" },
  { label: "Казань", value: "Казань" },
  { label: "Краснодар", value: "Краснодар" },
  { label: "Ростов-на-Дону", value: "Ростов-на-Дону" },
];
const customStyles = {
  control: (base, state) => ({
    backgroundColor:
      state.selectProps.touched && state.selectProps.error
        ? "rgba(236, 63, 63, 0.3)"
        : "#2F2F2F",
    alignItems: "spaceBetween",
    display: "flex",
    height: "56px",
  }),
  menu: (base) => ({
    ...base,
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor:
      state.selectProps.touched && state.selectProps.error
        ? "rgb(73, 19, 19)"
        : "#2F2F2F",
    color: "rgba(255, 255, 255, 0.5)",
    height: "56px",
    padding: 20,
    cursor: "pointer",
    ":active": {
      ...styles[":active"],
      color: "rgba(255, 255, 255, 1)",
      backgroundColor: "#2F2F2F",
    },
    ":hover": {
      ...styles[":hover"],
      color: "rgba(255, 255, 255, 1)",
      backgroundColor: "#1F1F1F",
    },
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: "rgba(255, 255, 255, 0.5)",
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    marginRight: 10,
    cursor: "pointer",
    ":hover": {
      ...base[":hover"],
      color: "rgba(255, 255, 255, 1)",
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "rgba(255, 255, 255, 0.5)",
    padding: 5,
  }),
};
const CitySelect = ({
  name,
  error,
  touched,
  setTouched,
  setFieldValue,
  value,
}) => {
  return (
    <>
      <Select
        error={error}
        touched={touched.city}
        name={name}
        value={value}
        options={cityOptions}
        styles={customStyles}
        onChange={(value) => setFieldValue(name, value)}
        onBlur={() => setTouched({ ...touched, city: true })}
        placeholder={"Выберите город"}
      />
    </>
  );
};
export default CitySelect;
