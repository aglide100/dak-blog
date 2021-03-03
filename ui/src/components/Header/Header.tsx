import React from "react";

export type HeaderProps = {};

export function Header(props: HeaderProps) {
  return (
    <nav className="w-screen">
      <div className="flex justify-between">
        <div>Logo</div>

        <div>
          <div>Sing In</div>
          <div>Sing Up</div>
        </div>
      </div>
    </nav>
  );
}
