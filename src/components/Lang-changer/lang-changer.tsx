import {useTranslation} from 'react-i18next';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button.tsx";
import {LangIcon} from '@/assets/language-svgrepo-com.tsx';
import {useTheme} from "@/components/Theme/useTheme.tsx";

const LanguageSwitcher = () => {
    const {t, i18n} = useTranslation();
    const {theme} = useTheme();
    const color = theme === "dark" ? "white" : "black"

    const changeLanguage = (lng: string | undefined) => {
        i18n.changeLanguage(lng);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' size="icon">
                    <LangIcon fill={color}/>
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('hu')}>
                    {t("hu")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                    {t("en")}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSwitcher;