import "@theme-toggles/react/css/Classic.css"
import {Classic} from "@theme-toggles/react"
import {useCallback} from "react";
import {useTheme} from "@/components/Theme/useTheme.tsx";


export function ModeToggle() {
    const {setTheme, theme} = useTheme()

    const onClickHandler = useCallback(() => {
        setTheme(theme === "dark" ? "light" : "dark");
    }, [theme])


    return (
        <Classic onToggle={onClickHandler} duration={750} placeholder={undefined} onPointerEnterCapture={undefined}
                 onPointerLeaveCapture={undefined}/>

    )
}
