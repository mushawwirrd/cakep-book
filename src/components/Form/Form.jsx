import { useEffect, useState } from "react"
import Button from "../Button/Button"
import SecondaryButton from "../Button/SecodaryButton"

function Form({ fields, onSubmit, initialValue, primaryLable, secondLable, click }) {
    const [form, setForm] = useState(initialValue || {})
    const [display, setDisplay] = useState(initialValue || {})

    useEffect(() => {
        if (initialValue) {
            setForm(initialValue)
            setDisplay(initialValue)
        }
    }, [initialValue])

    const changeHandle = (e) => {
        const { name, value, type, files } = e.target

        if (type === "file") {
            setForm(prev => ({ ...prev, [name]: files[0] }))
            setDisplay(prev => ({ ...prev, [name]: files[0] }))
            return
        }

        const fieldConfig = fields.find(f => f.name === name)

        if (fieldConfig?.currency) {
            const numeric = Number(value.replace(/\D/g, ""))
            setForm(prev => ({ ...prev, [name]: numeric }))

            const formatted = numeric.toLocaleString("id-ID")
            setDisplay(prev => ({ ...prev, [name]: formatted }))

            return
        }

        setForm(prev => ({ ...prev, [name]: value }))
        setDisplay(prev => ({ ...prev, [name]: value }))

    }

    const submitHandle = (e) => {
        e.preventDefault()

        onSubmit(form)
    }


    return (
        <div>
            <form onSubmit={submitHandle}>
                {fields.map(f => (
                    <div>

                        <label className="block">{f.label}</label>

                        {f.type === "file" && form[f.name] && typeof form[f.name] === "string" && (
                            <img
                                src={`http://localhost:3005/lapangan/lihatsatu/${form[f.name]}`}
                                alt={f.name}
                                className="overflow-hidden object-cover rounded-xl w-32 h-32" />
                        )}

                        {f.type === "file" && typeof form[f.name] === "object" && (
                            <img
                                src={URL.createObjectURL(form[f.name])}
                                alt={f.name}
                                className="overflow-hidden object-cover rounded-xl w-32 h-32" />
                        )}

                        <input
                            type={f.type}
                            name={f.name}
                            value={f.type === "file" ? undefined : form[f.name] || ""}
                            onChange={changeHandle}
                            className="border"
                        />

                    </div>
                ))}

                <div className="flex items-center justify-center gap-x-2">
                    <SecondaryButton type="button" click={click} lable={secondLable} />
                    <Button lable={primaryLable} />
                </div>

            </form>
        </div>
    )
}

export default Form