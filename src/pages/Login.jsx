import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { setUser } = useAuth()

    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
    const [message, setMessage] = useState("")

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

            if (res.ok) {
                setMessage(data.message || "Berhasil login")
                setUser(true)
            } else {
                setMessage(data.message || "Gagal login")
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
                <input type="text" name="username" value={login.username} onChange={changeHandle} />

                <label className="block">Password</label>
                <input type="password" name="password" value={login.password} onChange={changeHandle} />

                <button>Masuk</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )

}