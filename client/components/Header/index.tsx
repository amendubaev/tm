import React from "react";
import styles from "./header.module.scss";
import grid from "../../styles/common/grid.module.scss";
import Logo from "../common/Logo";
import TimeTracker from "../TimeTracker";
import RightNav from "./RightNav";
import SwitchTheme from "./SwitchTheme";
import Search from "../common/Search";

export default function Header() {
    return (
        <header className={`${styles.header} `}>
            <Search />
            <div className="flex items-center gap-4">
                <SwitchTheme />
                <TimeTracker />
                <RightNav />
            </div>
        </header>
    );
}
