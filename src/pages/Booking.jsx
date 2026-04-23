import { useEffect, useState } from "react";


export default function OnlineBooking() {
    const [service, setService] = useState([])
    const [booking, setBooking] = useState({
        booking_date:"",
        booking_time: "",
        service_id: ""
    })
    const [message, setMessage] = useState("")

    const getService = async () => {
        const res = await fetch("http://localhost:3020/service/get", {
            credentials: "include"
        })

        const data = await res.json()
        setService(data)

    }

    useEffect(() => {
        getService()
    }, [])

    const changeHandle = (e) => {
        const { name, value } = e.target

        setBooking(prev => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const submitHandle = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch("http://localhost:3020/booking/online", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(booking)
            })

            const data = await res.json()

            if (res.ok) {
                setMessage(data.message || "Booking berhasil dibuat")
                
            } else {
                setMessage(data.message || "Booking gagal dibuat")
            }

        } catch (error) {
            console.error(error)
            setMessage("Server error")
        }
    }

    return (
        <div>
            <form onSubmit={submitHandle}>


                <label className="block">Tanggal booking</label>
                <input type="date" name="booking_date" value={booking.booking_date} onChange={changeHandle} />

                <label className="block">Jam booking</label>
                <input type="time" name="booking_time" value={booking.booking_time} onChange={changeHandle} />


                <select name="service_id" value={booking.service_id} onChange={changeHandle} >

                    <option value="">--Pilih Layanan--</option>

                    {service.map(s => (
                        <option key={s.id} value={s.id}> {s.name}</option>
                    ))}

                </select>

                <button>Booking</button>

            </form>
            {message && <p>{message}</p>}
        </div>
    )


}