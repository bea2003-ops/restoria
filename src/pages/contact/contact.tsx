import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet-async";
import Navigation from "@/components/Navigation/navigation.tsx";

const Contact = () => {
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
                <link rel="alternate" href={`${baseUrl}/en/contact`} hrefLang="en"/>
                <link rel="alternate" href={`${baseUrl}/hu/contact`} hrefLang="hu"/>
                <link rel="alternate" href={`${baseUrl}/contact`} hrefLang="x-default"/>
                <title>{t('contact_title')}</title>
                <meta name="description" content={t('contact_description')}/>
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Navigation/>
                <main className="container mx-auto p-4 flex-grow">


                    <p>{t('contact_content')}</p>

                </main>
            </div>
        </>
    );
};

export default Contact;