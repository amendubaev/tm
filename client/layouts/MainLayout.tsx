import React from "react";
import { toast, ToastContainer } from "react-toastify";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/Header";
import 'react-toastify/dist/ReactToastify.css';
import { IProject } from "../types/interfaces";
interface Props {}
const MainLayout: React.FC<React.PropsWithChildren<Props>> = (props) => {
    return (
        <>
            <Header />
            <div className="md:container flex gap-5">
                {props.children}
            </div>
            <ToastContainer />
        </>
    );
};

export default MainLayout;