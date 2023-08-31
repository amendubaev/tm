'use client';
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const switchTheme = () => {
    const [currentTheme, setTheme] = useState('dark');

    useEffect(() => {
        const currentTheme = localStorage.getItem('currentTheme');
        if (currentTheme) {
            setTheme(currentTheme);
        }
    }, [currentTheme]);

    const onChangeThemeHandler = () => { 
        const value = (currentTheme == 'dark' ? 'light' : 'dark');
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(value);
        setTheme(value);
    }

    return (
        <div onClick={onChangeThemeHandler}>
            <FontAwesomeIcon icon={currentTheme == 'light' ? faMoon : faSun} />
        </div>
    )
}

export default switchTheme