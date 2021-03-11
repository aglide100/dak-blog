import React from "react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const ButtonNormal = Template.bind({});
ButtonNormal.arguments = {
  label: "hello",
  onClick: () => {
    alert("hello!d");
  },
};
