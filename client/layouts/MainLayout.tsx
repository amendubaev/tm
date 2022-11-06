import React from "react";
import Header from "../components/Header";
interface Props {}
const MainLayout: React.FC<React.PropsWithChildren<Props>> = (props) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
};

export default MainLayout;
