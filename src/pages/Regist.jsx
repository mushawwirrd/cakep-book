import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
                setMessage(data.message || "Berhasil terdaftar")
                //setTimeout(() => navigate("/login-admin"), 700)
            } else {
                setMessage(data.message || "Gagal terdaftar")
            }

        } catch (error) {
            console.error(error)
            setMessage("Server error")
        }
    }

    return (
        <div>
            <form onSubmit={submitHandle}>

                <label className="block">Username</label>
                <input type="text" name="username" value={regist.username} onChange={changeHandle} />

                <label className="block">Email</label>
                <input type="text" name="email" value={regist.email} onChange={changeHandle} />

                <label className="block">Phone</label>
                <input type="text" name="phone" value={regist.phone} onChange={changeHandle} />

                <label className="block">Password</label>
                <input type="password" name="password" value={regist.password} onChange={changeHandle} />

                <button>Daftar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}