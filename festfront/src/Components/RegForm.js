import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const RegForm = () => {
    const [formData, setFormData] = useState({
        namn: "",
        email: "",
        pris: "100",
        avec: "",
        sittplats: "",
        sillis: false,
        solenn: false,
        representerar: "",
        alkohol: true,
        meny: "Fisk",
        specialdieter: "",
        buss: false,
        kommentarer: "",
        visible: false
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleCheckChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.checked
        })
    }

    const handleSend = async () => {
        const dataToSend = formData;
        dataToSend.pris = parseInt(dataToSend.pris);
        console.log(dataToSend);
        axios.post("http://localhost:5000/participant", dataToSend)
        .then((response) => {
            console.log(response);
            navigate("../anmalansuccee", { replace: true });
        })
        .catch((error) => {
            console.log(error);
            navigate("../anmalanmisslyckad", { replace: true });
        })
    }

    return (
        <div className="form-container">
            {/* Namn */}
            <div className="mb-3">
                <label htmlFor="namn" className="form-label">Namn:</label>
                <input type="text" className="form-control" id="namn"
                    name="namn" value={formData.namn} onChange={handleChange} />
            </div>
            {/* Email */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email"
                    name="email" value={formData.email} onChange={handleChange} />
            </div>
            {/* Pris */}
            <div className="mb-3">
                <label htmlFor="pris" className="form-label">Pris:</label>
                <select type="number" className="form-select" id="pris" value={formData.pris}
                    name="pris" onChange={handleChange}>
                    <option value={100}>100€ - studerande</option>
                    <option value={120}>120€ - övriga</option>
                    <option value={300}>300€ - understödspris</option>
                </select>
            </div>
            {/* Avec */}
            <div className="mb-3">
                <label htmlFor="avec" className="form-label">Avec:</label>
                <input type="avec" className="form-control" id="avec"
                    name="avec" value={formData.avec} onChange={handleChange} />
            </div>
            {/* Sittplats */}
            <div className="mb-3">
                <label htmlFor="sittplats" className="form-label">Sittplats:</label>
                <input type="sittplats" className="form-control" id="sittplats"
                    name="sittplats" value={formData.sittplats} onChange={handleChange} />
            </div>
            {/* Sillis */}
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value={formData.sillis} defaultChecked={formData.sillis}
                id="sillis" name="sillis" onChange={handleCheckChange} />
                <label className="form-check-label" htmlFor="sillis">
                    Sillis
                </label>
            </div>
            {/* Solenn */}
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value={formData.solenn} defaultChecked={formData.solenn}
                id="solenn" name="solenn" onChange={handleCheckChange} />
                <label className="form-check-label" htmlFor="solenn">
                    Solenn
                </label>
            </div>
            {/* Representerar */}
            <div className="mb-3">
                <label htmlFor="representerar" className="form-label">Representerar:</label>
                <input type="representerar" className="form-control" id="representerar"
                    name="representerar" value={formData.representerar} onChange={handleChange} />
            </div>
            {/* Alkohol */}
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked={formData.alkohol} value={formData.alkohol}
                    id="alkohol" name="alkohol" onChange={handleCheckChange} />
                <label className="form-check-label" htmlFor="alkohol">
                    Alkohol
                </label>
            </div>
            {/* Meny */}
            <div className="mb-3">
                <label htmlFor="meny" className="form-label">Meny:</label>
                <select className="form-select" id="meny" value={formData.meny}
                    name="meny" onChange={handleChange}>
                    <option value={"Fisk"}>Fisk</option>
                    <option value={"Vegan"}>Vegan</option>
                </select>
            </div>
            {/* Specialdieter */}
            <div className="mb-3">
                <label htmlFor="specialdieter" className="form-label">Specialdieter:</label>
                <input type="specialdieter" className="form-control" id="specialdieter"
                    name="specialdieter" value={formData.specialdieter} onChange={handleChange} />
            </div>
            {/* Buss */}
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked={formData.buss} value={formData.buss}
                    id="buss" name="buss" onChange={handleCheckChange} />
                <label className="form-check-label" htmlFor="buss">
                    Buss
                </label>
            </div>
            {/* Kommentarer */}
            <div className="mb-3">
                <label htmlFor="kommentarer" className="form-label">Kommentarer:</label>
                <textarea rows={4} type="specialdieter" className="form-control" id="kommentarer"
                    name="kommentarer" value={formData.kommentarer} onChange={handleChange} />
            </div>
            {/* Visible */}
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked={formData.visible} value={formData.visible}
                    id="visible" name="visible" onChange={handleCheckChange} />
                <label className="form-check-label" htmlFor="visible">
                    Mitt namn får synas i deltagarlistan
                </label>
            </div>
            {/* Send form button */}
            <div className="form-btn-container">
                <button type="button" className="btn btn-primary" onClick={handleSend}>Skicka</button>
            </div>
            
        </div>
    )
}

export default RegForm;