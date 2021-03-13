import React from "react";

export type HeaderProps = {
  signIn: () => void;
  signUp: () => void;
  onClickGoToHome: () => void;
};

export function Header(props: HeaderProps) {
  return (
    <nav className="w-screen h-24">
      <div className="flex justify-between items-center">
        <div
          onClick={(ev) => {
            ev.preventDefault();
            props.onClickGoToHome();
          }}
        >
          Logo
          <img src="" alt=""></img>
        </div>

        <div className="flex flex-row mr-10">
          <div className="mr-4">
            <button
              onClick={(ev) => {
                ev.preventDefault();
                props.signIn();
              }}
            >
              Sign In
            </button>
          </div>
          <div className="mr-4">
            <button
              onClick={(ev) => {
                ev.preventDefault();
                props.signUp();
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
