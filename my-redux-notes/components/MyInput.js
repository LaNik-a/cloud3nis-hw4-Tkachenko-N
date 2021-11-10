import React from "react";
import { TextInput } from "react-native";

const CustomInput = (props) => {
  const {
    field: { name, onChange, value },
    ...inputProps
  } = props;

  return (
    <>
      <TextInput
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        {...inputProps}
      />
    </>
  );
};

export default CustomInput;