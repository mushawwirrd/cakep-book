import { useEffect, useState } from "react";
import Button from "../components/Button/Button";

export default function OnlineBooking() {
    const [service, setService] = useState([])
    const [booking, setBooking] = useState({
        booking_date: "",
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
                setMessage("Booking kamu berhasil dibuat")

            } else {
                setMessage("Maaf, booking gagal dibuat. Silahkan coba lagi!")
            }

        } catch (error) {
            console.error(error)
            setMessage("Server error")
        }
    }
    const labelStyle = "block text-xs font-medium text-gray-400 mt-2 mb-1"
    const inputStyle = " rounded-xl border p-3 text-xs bg-gray-100 w-full"

    const selected = service.find(s => booking.service_id === String(s.id))

    return (
        <div className="pt-20">
            <div className="max-w-md mx-auto">

                <div className="mb-4">
                    <h2 className="font-bold">Buat Booking</h2>
                    <p className="text-xs text-gray-400">Pilih layanan dan tentukan waktunya</p>
                </div>

                <div className="">
                    <form onSubmit={submitHandle}>

                        <div>
                            <div>
                                <p className={labelStyle}>Pilih layanan</p>
                            </div>

                            <div className="grid grid-cols-2 gap-2 mb-4">
                                {service.map(s => (
                                    <button
                                        type="button"
                                        key={s.id}
                                        onClick={() => setBooking(prev => ({ ...prev, service_id: String(s.id) }))}
                                        className={`p-3.5 rounded-2xl border shadow-sm border-gray-100 hover:border-gray-300 ${booking.service_id === String(s.id) ? "bg-black " : "bg-white "}`}>
                                        <p className={`text-sm font-medium ${booking.service_id === String(s.id) ? "text-white" : "text-black"}`}>{s.name}</p>
                                        <p className={`text-xs ${booking.service_id === String(s.id) ? "text-gray-200" : "text-gray-400"}`}>Rp {Number(s.price).toLocaleString("id-ID")}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="grid grid-cols-2 gap-2 mb-4">

                                <div className=" ">
                                    <label className={labelStyle}>Tanggal</label>
                                    <input type="date" name="booking_date" value={booking.booking_date} onChange={changeHandle} className={inputStyle} />
                                </div>

                                <div className=" ">
                                    <label className={labelStyle}>Jam</label>
                                    <input type="time" name="booking_time" value={booking.booking_time} onChange={changeHandle} className={inputStyle} />
                                </div>

                            </div>

                            <div className="text-center mt-3">
                                {message === "Booking kamu berhasil dibuat" ? (
                                    <p className="text-xs font-medium  text-green-500">{message}</p>
                                ) : (
                                    <p className="text-xs font-medium  text-red-500">{message}</p>
                                )}
                            </div>

                            <div className="flex justify-center mt-3">
                                <div className="w-1/2">
                                    <Button lable="Booking" />
                                </div>
                            </div>

                        </div>


                    </form>

                </div>

            </div>
        </div >
    )


}