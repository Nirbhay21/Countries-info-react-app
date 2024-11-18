import React from 'react'
import DarkModeIcon from "../assets/images/DarkModeIcon"
import LightModeIcon from '../assets/images/LightModeIcon'
import { useTheme } from '../hooks/useTheme';

export default function Header() {
    const [isDark, setIsDark] = useTheme();

    return (
        <header className="relative bg-white text-primary shadow-md dark:bg-dark-primary dark:text-dark-text-primary dark:shadow-dark-blur-bottom">
            <div className="mx-auto flex h-full max-w-screen-2xl items-center justify-between p-4 text-inherit sm:px-4">
                <h2 className="text-lg font-bold sm:text-xl lg:text-2xl"><a href="#">Where in the world?</a></h2>
                <a className="flex items-center gap-1.5 lg:gap-2" href="#" onClick={() => {
                    setIsDark(!isDark);
                    localStorage.setItem("isDarkMode", !isDark);
                }}>
                    {(isDark) ?
                        (<LightModeIcon className="h-4 w-4 fill-current stroke-current lg:h-5 lg:w-5" />) :
                        (<DarkModeIcon className="h-4 w-4 fill-current lg:h-5 lg:w-5" />)
                    }
                    <span className="text-sm font-semibold sm:text-base lg:text-xl">
                        {(isDark) ? "Light" : "Dark"} Mode
                    </span>
                </a>
            </div>
        </header>
    )
}
