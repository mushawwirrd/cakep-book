import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";

import Layout from "../pages/Layout";
import Beranda from "../pages/Beranda";
import Regist from "../pages/Regist";
import Login from "../pages/Login";
import OnlineBooking from "../pages/Booking";

export default function AppRoute() {
    return (
        <BrowserRouter>

            <AuthProvider>

                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Beranda />} />

                        <Route path="regist" element={<Regist />} />
                        <Route path="login" element={<Login />} />

                        <Route path="booking" element={<PrivateRoute><OnlineBooking /></PrivateRoute>} />



                    </Route>
                </Routes>

            </AuthProvider>

        </BrowserRouter>
    )
}