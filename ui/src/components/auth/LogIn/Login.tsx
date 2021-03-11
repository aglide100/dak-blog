import React from "react"

export type LoginProps = {}

export const Login = (props: LoginProps) => {
    return (
        <div className="flex flex-row justify-around">
            <div>
                Login
            </div>

            <div>
                <input type="text"></input>
                <input type="text"></input>
            </div>
        </div>
    )
}