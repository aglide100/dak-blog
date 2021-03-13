import React from "react";

export type LoginFormProps = {};

export const LoginForm = (props: LoginFormProps) => {
  return (
    <div className="flex flex-col justify-around">
      <div>Login</div>

      <div>
        <input type="text" placeholder="ID"></input>
        <input type="text" placeholder="PWD"></input>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
};
