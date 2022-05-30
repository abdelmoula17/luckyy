import React from "react";
import { AuthContext } from "./authContextProvider";
import { Navigate } from "react-router-dom";
const RequiredAuth = ({ children }) => {
  const { authentified } = React.useContext(AuthContext);
  console.log("authentified", authentified);
  if (!authentified) {
    return <Navigate to="/register" replace={true} />;
  }
  return <div>{children}</div>;
};

export default RequiredAuth;
