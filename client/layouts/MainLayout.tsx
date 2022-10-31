import React from "react";
import Header from '../components/Header'
interface Props {
}
const MainLayout: React.FC<React.PropsWithChildren<Props>> = ({children}) => {
  return (
    <>
      <Header/>
      {children}
    </>
  );
};

export default MainLayout;