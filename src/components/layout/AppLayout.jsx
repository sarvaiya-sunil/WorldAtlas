import React from "react";
import Footers from "../UI/Footers";
import Headers from "../UI/Headers";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      {/*Outlet is used to put the pages like home, about between header and footer */}
      <Footers />
    </>
  );
};

export default AppLayout;
