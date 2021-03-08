import React from "react";
import { Login } from "./Login";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Login",
  component: Login,
} as Meta;

const Template = (args) => <Login {...args} />;

export const LoginInfo = Template.bind({});
LoginInfo.arguments = {};
