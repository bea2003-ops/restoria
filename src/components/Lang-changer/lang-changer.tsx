// src/LanguageSwitcher.tsx
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useLocation, useNavigate} from 'react-router-dom';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from '@/components/ui/dropdown-menu';
import {Button} from '@/components/ui/button';
import {LangIcon} from '@/assets/language-svgrepo-com';
import {useTheme} from '@/components/Theme/useTheme';

const LanguageSwitcher: React.FC = () => {
    const {t, i18n} = useTranslation();
    const {theme} = useTheme();
    const color = theme === 'dark' ? 'white' : 'black';
    const location = useLocation();
    const navigate = useNavigate();

    const changeLanguage = (lng: string) => {
        const currentPath = location.pathname;
        let newPath = currentPath;
        
        if (currentPath.startsWith('/hu')) {
            newPath = currentPath.replace('/hu', '');
        } else if (currentPath.startsWith('/en')) {
            newPath = currentPath.replace('/en', '');
        }

        if (lng === 'hu') {
            newPath = `/hu${newPath === '/' ? '' : newPath}`;
        } else if (newPath !== '/' && !newPath.startsWith('/contact')) {
            newPath = `/en${newPath}`;
        }

        i18n.changeLanguage(lng);
        navigate(newPath);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <LangIcon fill={color}/>
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('hu')}>
                    {t('hu')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('en')}>
                    {t('en')}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSwitcher;