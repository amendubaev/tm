import { useEffect, useState } from "react";
import { formatTime } from "../../utils";
import Time from "./Time";
import styles from "./timetracker.module.scss";

const trackedTime = formatTime(1800);
const trackedToday = '05:30:12';

export default function TimeTracker() {
    const [timer, setTimer] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        let timerId: any;
     
        if(isRunning) {
            timerId = setInterval(() => {
                setTimer((timer) => timer + 1);
            }, 1000);
        }
        return () => { clearInterval(timerId) }
    }, [isRunning]);

    return (
        <div className={styles.header}>
            <span>{trackedTime}</span>
            <Time time={formatTime(timer)} />
            <div onClick={() => setIsRunning((prev) => !prev)}>
                {isRunning ? `Stop` : 'Start'}
            </div>
        </div>
    );
}
