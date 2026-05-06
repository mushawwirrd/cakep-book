
export default function SButton({ type, lable, click }) {
    return (
        <div>
            <div>

                <button
                    type={type}
                    onClick={click}
                    className=" bg-primary text-xs font-medium hover:bg-white hover:text-primary hover:shadow-xl duration-200 text-white w-full rounded-full py-2 px-4">

                    {lable}

                </button>

            </div>


        </div>
    )
}