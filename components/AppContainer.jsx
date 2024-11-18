import React from 'react'
import { useTheme } from '../hooks/useTheme';

export default function ({ children }) {
    const [isDark] = useTheme();
    return (
        <div className={`flex flex-col h-lvh ${(isDark) ? "dark" : ""}`}>
            {children}
        </div>
    )
}
