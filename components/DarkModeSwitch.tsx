"use client"
import { MdLightMode, MdDarkMode } from "react-icons/md"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"


export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const currentTheme = theme === 'system' ? systemTheme : theme
    useEffect(() => setMounted(true), [])

    return (
        <>
            {mounted &&
                (
                    currentTheme === 'dark' ? (
                        <span className='bg-secondary text-dark p-[7px] rounded-full cursor-pointer'>
                            <MdDarkMode size={14}
                                onClick={() => setTheme('light')} /></span>

                    ) : (
                        <span className='bg-secondary p-[7px] rounded-full cursor-pointer'>
                            <MdLightMode size={14}
                                onClick={() => setTheme('dark')} /></span>
                    )
                )}
        </>
    )
}
