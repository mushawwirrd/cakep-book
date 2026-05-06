import { BsTwitterX } from "react-icons/bs";
import { IoLocation, IoLogoInstagram,  IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io5";
import { IoIosClock} from "react-icons/io";

export default function Footer() {

    const textIcon = "flex items-center gap-1 text-xs text-white"
    return (
        <footer className="mt-8 bg-black px-4 pt-6 pb-3 ">

            <div className="max-w-7xl mx-auto ">

                <div className="grid grid-cols-3 items-center  mb-3">

                    <div >
                        <div className="flex flex-col items-center justify-center text-white">
                            <p className="text-xs font-medium text-white">Cakep Barbershop</p>
                            {/* <p className="text-xs text-gray-400 mt-1">Rambut adalah mahkota</p> */}
                        </div>
                    </div>

                    <div >
                        <div className="flex flex-col items-center">
                            <img src="/cakep.png" alt="cakep" className="w-24 " />
                            <p className="text-xs text-gray-400 mt-3 ">Rambut adalah mahkota</p>
                        </div>
                    </div>

                    <div >

                        <div className="flex flex-col items-center justify-center ">

                            <div className="flex flex-col justify-center ">
                                <div className="space-y-1 ">
                                    <div >
                                        <p className={textIcon}><IoIosClock size={14} />Open Daily, 10:00 am - 10:00 pm</p>
                                    </div>

                                    <p className={textIcon}><IoLocation size={13} />Dwikora Street, Palembang</p>

                                    <div>
                                        <p className={textIcon}> <IoLogoWhatsapp size={13} />+6282277889900</p>
                                    </div>

                                </div>


                                <div className="flex items-center gap-4 mt-4 text-white">
                                    <span><IoLogoInstagram size={16} /></span>
                                    <span><BsTwitterX size={13} /></span>
                                    <span><IoLogoYoutube size={16} /></span>
                                </div>

                            </div>
                        </div>

                    </div>


                </div >

            </div>

            <div className="border-b" />

            <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-white">Copryright © 2026</p>
            </div>


        </footer>
    )
}