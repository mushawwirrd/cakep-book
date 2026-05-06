import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";

import Layout from "../pages/Layout";
import Beranda from "../pages/Beranda";

import Regist from "../pages/Regist";
import Login from "../pages/Login";

import BerandaLogin from "../pages/BerandaLogin";
import OnlineBooking from "../pages/Booking";
import ScrollTop from "../components/ScrollTop";



export default function AppRoute() {

    return (
        <BrowserRouter>
            <ScrollTop />
            
            <AuthProvider>

                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Beranda />} />

                        <Route path="regist" element={<Regist />} />
                        <Route path="login" element={<Login />} />

                        <Route path="booking" element={<PrivateRoute><OnlineBooking /></PrivateRoute>} />
                        <Route path="beranda" element={<PrivateRoute><BerandaLogin /></PrivateRoute>} />




                    </Route>
                </Routes>

            </AuthProvider>

        </BrowserRouter>
    )
}