import React from "react";
import { Burger } from "../Burger/Burger";
import { SocialNetworks } from "../SocialNetworks";

export function Layout({ children }) {
  return (
    <>
      <Burger />
      {children}
      <SocialNetworks />
    </>
  );
}
