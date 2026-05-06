import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";


export default function Regist() {
    const [regist, setRegist] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    function changeHandle(e) {
        const { name, value } = e.target

        setRegist(prev => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const submitHandle = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:3020/auth/regist-customer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(regist)
            })

            const data = await res.json()

            if (res.ok) {
                setMessage("Berhasil terdaftar")
                setTimeout(() => navigate("/login"), 700)
            } else {
                setMessage(data.message || "Gagal terdaftar")
            }

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

                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 mb-6">

                    <div className="mb-4">
                        <h2 className="text-lg font-bold">Buat akun baru</h2>
                        <p className="text-xs text-gray-400">Daftar sekarang dan mulai booking dengan mudah</p>
                    </div>

                    <form onSubmit={submitHandle}>


                        <label className={labelStyle}>Username</label>
                        <input type="text" name="username" value={regist.username} onChange={changeHandle} placeholder="Nama kamu" className={inputStyle} />

                        <div className="grid grid-cols-2 gap-2 ">

                            <div>
                                <label className={labelStyle}>Email</label>
                                <input type="text" name="email" value={regist.email} onChange={changeHandle} placeholder="kamu@mail.com" className={inputStyle} />
                            </div>

                            <div>
                                <label className={labelStyle}>Phone</label>
                                <input type="text" name="phone" value={regist.phone} onChange={changeHandle} placeholder="08xxxxxxxxxx" className={inputStyle} />
                            </div>

                        </div>

                        <label className={labelStyle}>Password</label>
                        <input type="password" name="password" value={regist.password} onChange={changeHandle} placeholder="●●●●●●●●" className={inputStyle} />

                         <div className="text-center mt-3">
                            {message === "Berhasil terdaftar" ? (
                                <p className="text-xs font-medium  text-green-500">{message}</p>
                            ) : (
                                <p className="text-xs font-medium  text-red-500">{message}</p>
                            )}
                        </div>


                        <div className="mt-3">
                            <Button lable="Daftar" />
                        </div>

                        <div className="flex justify-center mt-4">
                            <p className="text-xs text-gray-400">Sudah punya akun? <Link to="/login" className="text-black hover:underline">Masuk di sini</Link> </p>
                        </div>
                    </form>
                    
                </div>


            </div>

        </div>

    )
}