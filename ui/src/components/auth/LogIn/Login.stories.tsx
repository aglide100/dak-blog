import React from "react"
import { Login, LoginProps } from "./Login"
import { Meta, Story } from "@storybook/react/types-6-0"

export default {
    title: "Auth/Login",
    component: Login,
} as Meta

const Template: Story<LoginProps> = (args) => <Login {...args} />

export const LoginInfo = Template.bind({});
LoginInfo.args = {}
