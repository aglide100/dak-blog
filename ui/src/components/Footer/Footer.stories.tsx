import React from "react";
import { Footer, FooterProps } from "./Footer";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
  title: "Components/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export const FooterInfo = Template.bind({});
FooterInfo.args = {};
