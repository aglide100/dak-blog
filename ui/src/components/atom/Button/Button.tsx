import React, { ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  size: "small" | "medium" | "large" | "full";
  type?: "submit" | "button";
  color?: "purple" | "gray" | "white";
  isDisabled?: boolean;
  transition?: ".4s" | ".2s";
  onClick: (e) => void;
  children: ReactNode;
};

export const Button = ({
  onClick,
  type = "button",
  color = "purple",
  isDisabled = false,
  transition = ".2s",
  size = "medium",
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classNames("border rounded border-solid", {
        "w-11 h-7 text-xs": size === "small",
        "w-16 h-9 text-sm": size === "medium",
        "w-50 h-12 text-lg": size === "large",
        "w-full h-full": size === "full",

        "bg-purple-400 text-white border-purple-400":
          color === "purple" && isDisabled,
        "bg-violet-500 text-white border-violet-500":
          color === "purple" && !isDisabled,
        "bg-gray-200 text-white border-gray-200":
          color === "gray" && isDisabled,
        "border-gray-400 bg-gray-400 text-white":
          color === "gray" && !isDisabled,
        "border-gray-200 bg-white text-gray-700`": color === "white",

        "hover:bg-violet-600 hover:text-white hover:border-violet-600":
          color === "purple" && !isDisabled,
        "hover:bg-neutral-500 hover:text-white hover:border-neutral-500":
          color === "gray" && !isDisabled,
        "hover:bg-neutral-100 hover:text-gray-700 hover:border-gray-200":
          color === "white" && !isDisabled,

        "text-opacity-30": isDisabled,
      })}
      style={{ transition: transition, WebkitTransition: transition }}
      disabled={isDisabled}
      onClick={(ev) => {
        ev.preventDefault();
        onClick(ev);
      }}
    >
      {children}
    </button>
  );
};
