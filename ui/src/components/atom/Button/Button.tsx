import React, { ReactNode } from "react";
import classnames from "classnames"

export type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={classnames("border rounded border-solid", {})}
      onClick={(ev) => {
        ev.preventDefault();
        props.onClick();
      }}
    >
      {props.label}
    </button>
  );
};
