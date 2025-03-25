import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "@/pages/home/home.tsx";
import Contact from "@/pages/contact/contact.tsx";
import i18n from "i18next";

function App() {
    document.documentElement.lang = i18n.language;

    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/en" element={<Home/>}/>
                <Route path="/hu" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/en/contact" element={<Contact/>}/>
                <Route path="/hu/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
