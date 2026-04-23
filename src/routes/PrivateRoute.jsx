import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const authCheck = async () => {
        try {
            const res = await fetch("http://localhost:3020/auth/check", {
                credentials: "include"
            })

            const data = await res.json()

            if (res.ok) {
                setUser(data)
            } else {
                setUser(null)
            }

        } catch (error) {
            setUser(null)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        authCheck()
    }, [])

    if (loading) return <p>Loading...</p>
    if (!user) return <Navigate to="/" replace />

    return children

}