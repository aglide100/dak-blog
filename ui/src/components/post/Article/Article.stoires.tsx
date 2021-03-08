import React from "react";
import { Article } from "./Article";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Article",
  component: Article,
} as Meta;

const Template = (args) => <Article {...args} />;

export const ArticleInfo = Template.bind({});
ArticleInfo.arguments = {};
