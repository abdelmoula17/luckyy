import React from "react";

export const AuthContext = React.createContext(null);
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [userToken, setUserToken] = React.useState({});
  const [authentified, setAuthentified] = React.useState(false);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userToken,
        setUserToken,
        authentified,
        setAuthentified,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
