import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Banner from "./Banner"
import Button from "../components/Button/Button"
import MButton from "../components/Button/MButton"
//import { GoArrowUpRight } from "react-icons/go"

export default function BerandaLogin() {
    const [service, setService] = useState([])

    const navigate = useNavigate()

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

    return (
        <div className="pt-[76px]">

            <Banner />

            <div className="max-w-4xl mx-auto mt-5 lg:mt-10">
                <div >

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                        {service.map(s => (
                            <div key={s.id} className="bg-white p-2 rounded-2xl border border-gray-100 shadow-md">

                                <div className=" overflow-hidden rounded-xl">
                                    <img src={`http://localhost:3020${s.filePath}`} alt="foto" className=" w-full flex-shrink-0 object-cover h-44 lg:h-56" />
                                </div>

                                <div className="px-4 py-2">
                                    <h2 className="text-lg lg:text-lg font-bold">{s.name}</h2>

                                    <div className="flex justify-between items-center mt-4">
                                        <p className="text-xs lg:text-sm font-semibold text-gray-400">Rp {Number(s.price).toLocaleString("id-Id")}</p>
                                        <MButton click={() => navigate("/booking")} lable="Booking" />

                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </div>
    )
}