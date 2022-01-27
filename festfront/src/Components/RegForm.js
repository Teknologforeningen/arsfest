import { useState } from "react";


const RegForm = () => {
    const [formData, setFormData] = useState({
        namn: "",
        email: "",
        pris: 100,
        avec: "",
        sittplats: "",
        sillis: false,
        solenn: false,
        representerar: "",
        alkohol: true,
        meny: "",
        specialdieter: "",
        buss: false,
        kommentarer: ""
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="form-container">
            <div class="mb-3">
                <label for="namn" class="form-label">Namn:</label>
                <input type="text" class="form-control" id="namn"
                    name="namn" value={formData.namn} onChange={handleChange} />
            </div>
        </div>
    )
}

export default RegForm;