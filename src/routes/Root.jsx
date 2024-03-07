import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
