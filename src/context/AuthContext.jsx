import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const authCheck = async () => {
        try {
            const res = await fetch("http://localhost:3020/auth/check", {
                credentials: "include",
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

    const logOut = async () => {

        const res = await fetch("http://localhost:3020/auth/logout", {
            method: "POST",
            credentials: 'include'
        })

        setUser(null)

    }

    return (
        <AuthContext.Provider value={{ authCheck, logOut, user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth() {
    return useContext(AuthContext)
}