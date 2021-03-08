import React from "react";
import { CreateUser } from "./CreateUser";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/CreateUser",
  component: CreateUser,
} as Meta;

const Template = (args) => <CreateUser {...args} />;

export const CreateUserInfo = Template.bind({});
CreateUserInfo.arguments = {};
