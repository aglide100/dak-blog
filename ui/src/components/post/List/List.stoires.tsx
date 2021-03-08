import React from "react";
import { List } from "./List";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/List",
  component: List,
} as Meta;

const Template = (args) => <List {...args} />;

export const ListInfo = Template.bind({});
ListInfo.arguments = {};
