import {useContext} from "react";
import {ThemeProviderContext} from "@/components/Theme/theme-provider.tsx";

export type Theme = "dark" | "light" | "system";

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};