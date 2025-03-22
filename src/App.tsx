import './App.css'
import logo from './assets/restoria-logo.jpg';
import {Helmet} from "react-helmet-async";

function App() {

    return (
        <div>
            <Helmet>
                <title>Restoria - Home</title>
            </Helmet>
            <h1>Bea</h1>
            <img src={logo} alt="Logo"/>
        </div>
    )
}

export default App
