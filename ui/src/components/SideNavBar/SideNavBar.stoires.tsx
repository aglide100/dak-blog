import React from "react";
import { SideNavBar, SideNavBarProps } from "./SideNavBar";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
  title: "Components/SideNavBar",
  component: SideNavBar,
} as Meta;

const Template: Story<SideNavBarProps> = (args) => <SideNavBar {...args} />;

export const SideNavBarInfo = Template.bind({});
SideNavBarInfo.args = {};
