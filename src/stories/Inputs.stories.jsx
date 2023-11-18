import React from "react";

import { Input } from "components";

export default {
  title: "saas_accounts/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder4",
  color: "white_A700",
  size: "lg",
  variant: "fill",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
