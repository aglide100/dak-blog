import React from "react";
import { Header, HeaderProps } from "./Header";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const HeaderInfo = Template.bind({});
HeaderInfo.args = {
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
