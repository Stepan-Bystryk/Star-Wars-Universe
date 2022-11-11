import { useState } from "react";
import { UiImput } from "./UiInput";

export default {
  title: "Ui-Kit/UiInput",
  component: UiInput,
};

const Template = (arg) => {
  const [value, setValue] = useState("");

  const handleInputChenge = (value) => {
    setValue(value);
  };

  return (
    <UiImput {...arg} value={value} handleInputChenge={handleInputChenge} />
  );
};

const props = {
  value: "",
  handleInputChenge: () => console.log("Input chenge"),
  placeholder: "Placeholder",
  classes: "",
};

export const Default = Template.bind({});
Default.args = {
  ...props,
};
