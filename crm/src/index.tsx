import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AuthProvider} from "./contexts/AuthContext";
import Orders from "./components/Orders/Orders";
import LoginPage from "./components/LoginPage/LoginPage";
import Employees from "./components/Employees/Employees";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <Routes>

                    <Route path="/" element={<App/>}>
                        <Route index element={<Orders/>}/>
                        <Route path="/employees" element={<Employees/>}></Route>
                    </Route>
                    <Route path="/login" element={<LoginPage/>}></Route>

                </Routes>
            </AuthProvider>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();