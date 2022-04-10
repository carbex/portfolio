import React from "react";
import Burger from "../Burger/Burger";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

const Layout = ({ children }) => {
  return (
    <>
      <Burger />
      {children}
      <SocialNetworks />
    </>
  );
};

export default Layout;
