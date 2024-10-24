import React from "react";
import { NativeSelect, NativeSelectProps } from "@mantine/core";

type SelectInputProps = NativeSelectProps;

const SelectInput: React.FC<SelectInputProps> = (props) => {
  return <NativeSelect {...props} />;
};

export default SelectInput;
