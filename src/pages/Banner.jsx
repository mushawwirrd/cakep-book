import { useEffect, useState } from "react";

const image = [ "cliper.jpg", "/haircuts6.jpg", "/shave.jpg", ]

export default function Banner() {
    const [current, setCurrent] = useState(0)

    function nextSlide() {
        setCurrent(prev => prev === image.length - 1 ? 0 : prev + 1)
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000)
        return () => clearInterval(interval)
    })

    return (

        <div >
            <div className="relative overflow-hidden rounded-xl  mb-3 mx-2">

                <div className="flex  items-center transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}>
                    {image.map((img, i) => (
                        <img key={i} src={img} alt={`Slide${i}`} className="w-full flex-shrink-0 items-end object-cover h-40 md:h-96" />
                    ))}
                </div>

                <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-1 ">

                    {image.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-2 h-2 rounded-full ${current === i ? "w-4 bg-white" : "w-2 bg-gray-400"}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>

    )

}