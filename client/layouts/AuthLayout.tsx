import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import gridStyles from "../styles/common/grid.module.scss";
import 'react-toastify/dist/ReactToastify.css';
interface Props {}
const AuthLayout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="md:container">
                <div className={`${gridStyles["col-6"]}`}>
                    {/* <Image
                        src="/assets/images/tm-bg.jpg"
                        layout="fill"
                        alt="auth pages"
                    /> */}
                </div>
                <div className={`${gridStyles["col-6"]}`}>{children}</div>
            </div>
            <ToastContainer />
        </>
    );
};

export default AuthLayout;
