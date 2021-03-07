import React from "react";
import { Header } from "./Header";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

const Template = (args) => <Header {...args} />;

export const HeaderInfo = Template.bind({});
HeaderInfo.arguments = {
  signIn: () => {
    alert("wip");
  },
  signUp: () => {
    alert("wip");
  },
  onClickGoToHome: () => {
    alert("wip");
  },
};
