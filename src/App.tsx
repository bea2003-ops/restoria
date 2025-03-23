import './App.css'
import logo from './assets/restoria-logo.jpg';
import {Helmet} from "react-helmet-async";
import Navigation from "@/components/Navigation/navigation.tsx";
import {useTranslation} from "react-i18next";

function App() {

    const {t} = useTranslation();

    return (
        <div>
            <Navigation/>
            <Helmet>
                <title>Restoria - Home</title>
            </Helmet>


            <h1>{t('welcome')}</h1>
            <img src={logo} alt="Logo"/>
        </div>
    )
}

export default App
