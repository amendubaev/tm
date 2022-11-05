import React from "react";
import Header from "../components/Header";
interface Props {}
const AuthLayout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AuthLayout;
