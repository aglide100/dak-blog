import React from "react";
import { Footer } from "./Footer";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Footer",
  component: Footer,
} as Meta;

const Template = (args) => <Footer {...args} />;

export const FooterInfo = Template.bind({});
FooterInfo.arguments = {};
