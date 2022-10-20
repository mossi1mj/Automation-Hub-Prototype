import React, { Fragment } from "react";
import NavigationBar from "./NavigationBar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavigationBar />
      {children}
    </Fragment>
  );
};

export default Layout;
