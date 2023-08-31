'use client';
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

        if (isRunning) {
            timerId = setInterval(() => {
                setTimer((timer) => timer + 1);
            }, 1000);
        }
        return () => { clearInterval(timerId) }
    }, [isRunning]);

    return (
        <div className="flex gap-2 items-center p-2.5 rounded-lg border border-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none"><path fill="#fff" d="M9.163 20C4.288 20 .326 16.037.326 11.163c0-4.875 3.962-8.837 8.837-8.837 4.874 0 8.837 3.962 8.837 8.837C18 16.037 14.037 20 9.163 20Zm0-16.28c-4.102 0-7.442 3.34-7.442 7.443 0 4.102 3.34 7.442 7.442 7.442s7.442-3.34 7.442-7.442c0-4.103-3.34-7.442-7.442-7.442Z" /><path fill="#fff" d="M9.163 11.628a.703.703 0 0 1-.698-.698V6.28c0-.382.317-.699.698-.699.381 0 .698.317.698.698v4.651a.703.703 0 0 1-.698.698ZM11.954 1.395H6.372a.703.703 0 0 1-.697-.697c0-.382.316-.698.697-.698h5.582c.381 0 .697.316.697.698a.703.703 0 0 1-.697.697Z" /></svg>
            <div className="flex flex-col g-1">
                <span className="text-sm leading-none">{trackedTime}</span>
                <span className="text-xs text-slate-500 leading-none">today worked</span>
                {/* <Time time={formatTime(timer)} /> */}
            </div>
            <div className="text-base w-8 h-8 flex items-center cursor-pointer justify-center dark:bg-slate-800 rounded-full" onClick={() => setIsRunning((prev) => !prev)}>
                {isRunning ? `Stop` : <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" fill="none"><path fill="#fff" d="m0 0 10 6-10 6V0Z" /></svg>}
            </div>
        </div>
    );
}
