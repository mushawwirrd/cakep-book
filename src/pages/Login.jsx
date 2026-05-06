import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const { setUser } = useAuth()

    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
    const [message, setMessage] = useState("")

    const navigate = useNavigate()

    function changeHandle(e) {
        const { name, value } = e.target

        setLogin(prev => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const submitHandle = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch("http://localhost:3020/auth/login-customer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(login)
            })

            const data = await res.json()

            if (!res.ok) {
                setMessage(data.message || "Login Gagal")
                return
            }

            setUser(true)
            setMessage("Login Berhasil")
            setTimeout(() => navigate("/beranda"), 900)

        } catch (error) {
            console.error(error)
            setMessage("Server error")
        }
    }

    const labelStyle = "block text-xs font-medium text-gray-400 mt-2 mb-1"
    const inputStyle = " rounded-xl border p-3 text-xs bg-gray-100 w-full"

    return (
        <div className="pt-20">
            <div className="max-w-sm mx-auto">

                <div className="flex flex-col items-center justify-center mt-5 mb-6">
                    <img src="cakep_blck.png" alt="cakep" className="w-28" />
                    <p className="text-xs font-medium text-gray-400">Barbershop</p>
                </div>

                <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">

                    <div className="mb-4">
                        <h2 className="text-xl font-extrabold">Selamat datang</h2>
                        <p className="text-xs text-gray-400">Masuk untuk memulai booking</p>
                    </div>

                    <form onSubmit={submitHandle}>

                        <div className="mb-2">
                            <label className={labelStyle}>Username</label>
                            <input type="text" name="username" value={login.username} placeholder="Username kamu" onChange={changeHandle} className={inputStyle} />

                            <label className={labelStyle}>Password</label>
                            <input type="password" name="password" value={login.password} placeholder="●●●●●●●●" onChange={changeHandle} className={inputStyle} />
                        </div>

                        <div className="text-center mt-3">
                            {message === "Login Berhasil" ? (
                                <p className="text-xs font-medium  text-green-500">{message}</p>
                            ) : (
                                <p className="text-xs font-medium  text-red-500">{message}</p>
                            )}
                        </div>

                        <div className=" mt-3">
                            <Button lable="Masuk" />
                        </div>

                        <div className="flex justify-center mt-4">
                            <p className="text-xs text-gray-400">Belum punya akun? <Link to="/regist" className="text-black hover:underline">Daftar di sini</Link> </p>
                        </div>
                    </form>

                </div>

            </div>
        </div>

    )

}