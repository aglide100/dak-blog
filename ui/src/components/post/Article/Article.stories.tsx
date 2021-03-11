import React from "react"
import { Article, ArticleProps } from "./Article"
import { Meta, Story } from "@storybook/react/types-6-0"

export default {
    title: "posts/Article",
    component: Article,
} as Meta;

const Template: Story<ArticleProps> = (args) => <Article {...args} />

export const ArticleInfo = Template.bind({})
ArticleInfo.args = {}
