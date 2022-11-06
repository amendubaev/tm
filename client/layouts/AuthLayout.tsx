import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import gridStyles from "../styles/common/grid.module.scss";
interface Props {}
const AuthLayout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
    return (
        <>
            <Header />
            <div className={gridStyles.container}>
                <div className={gridStyles.row}>
                    <div className={`${gridStyles["col-6"]}`}>
                        {/* <Image
                            src="/assets/images/tm-bg.jpg"
                            layout="fill"
                            alt="auth pages"
                        /> */}
                    </div>
                    <div className={`${gridStyles["col-6"]}`}>{children}</div>
                </div>
            </div>
        </>
    );
};

export default AuthLayout;
