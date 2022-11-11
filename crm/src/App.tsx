import React from 'react';
import './App.css';
import {useAuth} from "./contexts/AuthContext";
import Header from "./components/Header/Header";
import Orders from "./components/Orders/Orders"
import LoginPage from "./components/LoginPage/LoginPage";
import {Navigate, Outlet} from "react-router-dom";


function App() {

    const {isAuth, login} = useAuth()

    if(!isAuth){
        return <Navigate to={'/login'}/>
    }

    return (
        <div>
            {isAuth && <Header/>}
            <Outlet/>
        </div>
    );
}

export default App;
