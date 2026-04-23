import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
    const { user, logOut } = useAuth()
    const navigate = useNavigate()

    const logOutHandle = async () => {
        await logOut()
        navigate("/")
    }

    return (
        <div>

            <nav>

                <div>

                    <ul className="flex space-x-6">

                        {user ? (
                            <>
                                <li>
                                    <Link to="/booking">Booking</Link>
                                </li>
                                <button onClick={logOutHandle}>Keluar</button>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/">Beranda</Link>
                                </li>
                                <li>
                                    <Link to="/regist">Daftar</Link>
                                </li>
                                <li>
                                    <Link to="/login">Masuk</Link>
                                </li>
                            </>
                        )}

                    </ul>

                </div>

            </nav>

            <Outlet/>

        </div>
    )
}