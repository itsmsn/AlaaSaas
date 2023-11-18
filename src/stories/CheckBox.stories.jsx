import React from "react";
import { CheckBox } from "components";

export default {
  title: "saas_accounts/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "square",
  color: "white_A700",
  variant: "fill",
  label: "Checkbox",
  inputClassName: "mr-1",
};
