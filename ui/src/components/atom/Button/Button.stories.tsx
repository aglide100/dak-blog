import { Story } from "@storybook/react/types-6-0";
import React from "react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ButtonNormal = Template.bind({});
ButtonNormal.args = {
  label: "hello",
  onClick: () => {
    alert("hello!d");
  },
};
