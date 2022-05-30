import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
      <div className="text-black  py-6 sm:px-6">{children}</div>
    </div>
  );
};
export default Layout;
