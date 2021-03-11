import React, { ReactNode } from "react";

export type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className=""
      onClick={(ev) => {
        ev.preventDefault();
        props.onClick();
      }}
    >
      {props.label}
    </button>
  );
};
