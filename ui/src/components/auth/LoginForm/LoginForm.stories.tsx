import React from "react";
import { LoginForm, LoginFormProps } from "./LoginForm";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
  title: "Auth/LoginForm",
  component: LoginForm,
} as Meta;

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />;

export const LoginFormInfo = Template.bind({});
LoginFormInfo.args = {};
