import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Footer from "./Footer";

export default function Layout() {
    const { user, logOut } = useAuth()
    const navigate = useNavigate()

    const logOutHandle = async () => {
        await logOut()
        navigate("/")
    }

    const liStyle = "text-xs hover:text-gray-300 transition-transform duration-200"

    return (
        <div>

            <nav className="w-full fixed z-50 bg-primary text-white">

                <div className="flex  items-center justify-between px-8 py-5 ">

                    <div>
                        <Link to="/">
                            <img src="cakep.png" alt="comb" className="w-20" />
                        </Link>
                    </div>


                    <ul className="flex items-center space-x-4">

                        {user ? (
                            <>
                                <li>
                                    <Link to="/beranda" className={liStyle}>Beranda</Link>
                                </li>
                                <li>
                                    <Link to="/booking" className={liStyle}>Booking</Link>
                                </li>
                              

                                  <span className="w-[1px] h-4 bg-white"/>

                                <li>
                                    <button onClick={logOutHandle} className="text-xs font-semibold hover:text-gray-300 transition-transform duration-200">Keluar</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/" className={liStyle}>Beranda</Link>
                                </li>

                 
                                <li>
                                    <Link to="/login" className={liStyle}>Masuk</Link>
                                </li>

                                 <li>
                                    <Link to="/regist" className="text-xs font-medium py-1.5 px-3 rounded-full bg-white hover:bg-gray-300 text-black ">Daftar</Link>
                                </li>
                            </>
                        )}

                    </ul>

                </div>

            </nav>

            <Outlet />
            <Footer />

        </div>
    )
}