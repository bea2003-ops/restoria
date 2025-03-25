import {useLocation} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {Button} from '@/components/ui/button';
import {Menu} from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation/navigation-menu.tsx";
import {navigationMenuTriggerStyle} from "@/components/ui/navigation/navigation-menu-trigger-style.tsx";
import LanguageSwitcher from "@/components/Lang-changer/lang-changer.tsx";
import {ModeToggle} from "@/components/Theme/mode-toggle.tsx";

const Navigation = () => {
    const {t} = useTranslation();
    const {pathname} = useLocation();

    const isHomeActive = pathname === '/' || pathname === '/en' || pathname === '/hu';
    const isContactActive = pathname === '/contact' || pathname === '/en/contact' || pathname === '/hu/contact';
    const langPrefix = pathname.startsWith('/hu') ? 'hu' : 'en';

    return (
        <header className="p-4 border-b">
            <div className="container mx-auto flex items-center justify-between">
                {/* Desktop Navigation */}
                <NavigationMenu className="hidden md:flex max-w-max">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className={`${navigationMenuTriggerStyle()} ${isHomeActive ? 'bg-accent' : ''}`}
                                href={`/${langPrefix}`}
                            >
                                {t('home')}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className={`${navigationMenuTriggerStyle()} ${isContactActive ? 'bg-accent' : ''}`}
                                href={`/${langPrefix}/contact`}
                            >
                                {t('contact')}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Language Switcher */}
                <LanguageSwitcher/>
                <ModeToggle/>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-6 w-6"/>
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                            <nav className="flex flex-col gap-4 mt-4">
                                <a
                                    href={`/${langPrefix}`}
                                    className={`block px-4 py-2 text-lg ${isHomeActive ? 'bg-accent rounded-md' : ''}`}
                                >
                                    {t('home')}
                                </a>
                                <a
                                    href={`/${langPrefix}/contact`}
                                    className={`block px-4 py-2 text-lg ${isContactActive ? 'bg-accent rounded-md' : ''}`}
                                >
                                    {t('contact')}
                                </a>
                            </nav>
                            <LanguageSwitcher/>
                            <ModeToggle/>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};


export default Navigation;