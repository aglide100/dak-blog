import React from "react";
import { SideNavBar } from "./SideNavBar";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/SideNavBar",
  component: SideNavBar,
} as Meta;

const Template = (args) => <SideNavBar {...args} />;

export const SideNavBarInfo = Template.bind({});
SideNavBarInfo.arguments = {};
