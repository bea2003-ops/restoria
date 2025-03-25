// src/Home.tsx
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Navigation from "@/components/Navigation/navigation.tsx";
import {Helmet} from "react-helmet-async";


const Home = () => {
    const {t, i18n} = useTranslation();
    const {pathname} = useLocation();
    const baseUrl = 'https://restoriahungary.com';

    useEffect(() => {
        const lang = pathname.startsWith('/hu') ? 'hu' : 'en';
        i18n.changeLanguage(lang);
    }, [pathname, i18n]);

    return (
        <>
            <Helmet>
                <html lang={i18n.language}/>
                <link rel="alternate" href={`${baseUrl}/en`} hrefLang="en"/>
                <link rel="alternate" href={`${baseUrl}/hu`} hrefLang="hu"/>
                <link rel="alternate" href={`${baseUrl}/`} hrefLang="x-default"/>
                <title>{t('title')}</title>
                <meta name="description" content={t('description')}/>
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Navigation/>
                <main className="container mx-auto p-4 flex-grow">
                    <p>{t('welcome')}</p>
                </main>
            </div>
        </>
    );
};

export default Home;