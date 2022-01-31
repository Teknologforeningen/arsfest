import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setErrorMessage } from "../ErrorMessage";

const formOpenDate = new Date('31 January 2022 12:00');
const participantLimit = 550;

const isRegClosed = () => {
    const currDate = new Date();
    return false;//currDate < formOpenDate;
}

const RegFull = () => {
    return (
        <>
        <h2 className="page-content-title">Deltagaranmälan</h2>
        <p className="page-content-text">
            Kvoten för inbjudna gäster är fylld. 
            Det går ännu att anmäla sig med den öppna anmälan som öppnar 7.2 kl 12.
        </p>
        </> 
    )
}

const RegClosed = () => {
    return (
        <>
        <h2 className="page-content-title">Deltagaranmälan</h2>
        <p className="page-content-text">
            Anmälan öppnar 31.1 kl 12 för inbjudna gäster och den öppna anmälan öppnar 7.2 kl 12. 
            Ifall kvoten för inbjudna gäster fylls stänger anmälan och öppnar igen till den öppna anmälan.
        </p>
        </>
    )
}  
  
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
        alkoholfri: false,
        meny: "Fisk",
        specialdieter: "",
        buss: false,
        kommentarer: "",
        visible: false
    });
    const [checkData, setCheckData] = useState({
        foto: false,
        gdpr: false
    });
    const [formSending, setFormSending] = useState(false);
    const [isRegFull, setIsRegFull] = useState(false);

    useEffect(() => {
      axios
      .get(`${process.env.REACT_APP_API_URL}/api/participants`)
      .then(returnedParticipants => {
        setIsRegFull(returnedParticipants.data.length >= participantLimit);
      })
    }, [])
  
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
        });
        setCheckData({
            ...checkData,
            [event.target.name]: event.target.checked
        });
    }

    const handleSend = async () => {
        setFormSending(true);
        const dataToSend = formData;
        dataToSend.pris = parseInt(dataToSend.pris);
        // console.log(dataToSend);
        axios.post(`${process.env.REACT_APP_API_URL}/api/participant`, dataToSend)
        .then((response) => {
            // console.log(response);
            navigate("../anmalansuccee", { replace: true });
        })
        .catch((error) => {
            // console.log(error);
            setErrorMessage(error.request.response);
            navigate("../anmalanmisslyckad", { replace: true });
        })
    }

    const isValid = () => {
        const valid = (
            formData.namn !== "" &&
            formData.email !== "" &&
            checkData.foto &&
            checkData.gdpr
        )
        return valid;
    }
    
    if (isRegClosed())
        return <RegClosed />;

    if (isRegFull)
        return <RegFull />;

    return (
        <>
        {!formSending?
        <div className="form-container">
            {/* Namn */}
            
            <div className="mb-3">
                <label htmlFor="namn" className="form-label">* Namn (för- och efternamn)</label>
                <input type="text" className="form-control" id="namn"
                    name="namn" value={formData.namn} onChange={handleChange} />
            </div>
            {/* Email */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">* Epost</label>
                <input type="email" className="form-control" id="email"
                    name="email" value={formData.email} onChange={handleChange} />
            </div>
            {/* Pris */}
            <div className="mb-3">
                <label htmlFor="pris" className="form-label">* Jag deltar med...</label>
                <select type="number" className="form-select" id="pris" value={formData.pris}
                    name="pris" onChange={handleChange}>
                    <option value={100}>Supékort studerande (100€)</option>
                    <option value={120}>Supékort övriga (120€)</option>
                    <option value={300}>Understödspris (300€)</option>
                </select>
            </div>
            {/* Avec */}
            <div className="mb-3">
                <label htmlFor="avec" className="form-label">
                    Namn på avec (lämna tomt om du inte deltar med en avec, observera att också avecer ska skicka in personlig deltagaranmälan)
                </label>
                <input type="avec" className="form-control" id="avec"
                    name="avec" value={formData.avec} onChange={handleChange} />
            </div>
            {/* Sittplats */}
            <div className="mb-3">
                <label htmlFor="sittplats" className="form-label">
                    Önskat bordssällskap (namn eller gruppnamn)
                </label>
                <input type="sittplats" className="form-control" id="sittplats"
                    name="sittplats" value={formData.sittplats} onChange={handleChange} />
            </div>
            {/* Sillis */}
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value={formData.sillis} defaultChecked={formData.sillis}
                id="sillis" name="sillis" onChange={handleCheckChange} />
                <label className="form-check-label" htmlFor="sillis">
                Jag vill anmäla mig till sillisen i samband med deltagaranmälan (12€)
                </label>
            </div>
            {/* Solenn */}
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value={formData.solenn} defaultChecked={formData.solenn}
                id="solenn" name="solenn" onChange={handleCheckChange} />
                <label className="form-check-label" htmlFor="solenn">
                    Jag vill delta i den solenna akten för att framföra en hälsning åt jubilaren
                </label>
            </div>
            {/* Representerar */}
            <div className="mb-3">
                <label htmlFor="representerar" className="form-label">
                    Förening eller instans som du representerar
                </label>
                <input type="representerar" className="form-control" id="representerar"
                    name="representerar" value={formData.representerar} onChange={handleChange} />
            </div>
            {/* Alkoholfri */}
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked={formData.alkoholfri} value={formData.alkoholfri}
                    id="alkoholfri" name="alkoholfri" onChange={handleCheckChange} />
                <label className="form-check-label" htmlFor="alkoholfri">
                    Alkoholfri
                </label>
            </div>
            {/* Meny */}
            <div className="mb-3">
                <label htmlFor="meny" className="form-label">Meny</label>
                <select className="form-select" id="meny" value={formData.meny}
                    name="meny" onChange={handleChange}>
                    <option value={"Fisk"}>Fisk</option>
                    <option value={"Vegan"}>Vegan</option>
                </select>
            </div>
            {/* Specialdieter */}
            <div className="mb-3">
                <label htmlFor="specialdieter" className="form-label">Allergier och specialdieter</label>
                <input type="specialdieter" className="form-control" id="specialdieter"
                    name="specialdieter" value={formData.specialdieter} onChange={handleChange} />
            </div>
            {/* Buss */}
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked={formData.buss} value={formData.buss}
                    id="buss" name="buss" onChange={handleCheckChange} />
                <label className="form-check-label" htmlFor="buss">
                    Jag vill ha busstransport från banketten till efterfesten på Urdsgjallar
                </label>
            </div>
            {/* Kommentarer */}
            <div className="mb-3">
                <label htmlFor="kommentarer" className="form-label">Kommentarer</label>
                <textarea rows={4} type="specialdieter" className="form-control" id="kommentarer"
                    name="kommentarer" value={formData.kommentarer} onChange={handleChange} />
            </div>
            {/* Visible */}
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked={formData.visible} value={formData.visible}
                    id="visible" name="visible" onChange={handleCheckChange} />
                <label className="form-check-label" htmlFor="visible">
                    Jag vill att mitt namn ska synas i den öppna deltagarlistan
                </label>
            </div>
            {/* Photo guidelines */}
            <div className="mandatory-field">
                <p className="pe-2">*</p>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" defaultChecked={checkData.foto} value={checkData.foto}
                        id="foto" name="foto" onChange={handleCheckChange} />
                    <label className="form-check-label" htmlFor="foto">
                        Jag har läst informationen om fotografering under årsfesten. Ifall jag inte vill bli fotograferad under årsfesten följer jag de anvisningar som getts på “Fotoinfo”-fliken.
                    </label>
                </div>
            </div>
            {/* GDPR */}
            <div className="mandatory-field">
                <p className="pe-2">*</p>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" defaultChecked={checkData.gdpr} value={checkData.gdpr}
                        id="gdpr" name="gdpr" onChange={handleCheckChange} />
                    <label className="form-check-label" htmlFor="gdpr">
                        Jag godkänner att mina personuppgifter används för festens förverkligande. Uppgifterna raderas senast 14 dagar efter ordnandet av festen.
                    </label>
                </div>
            </div>
            {/* Send form button */}
            <div className="form-btn-container">
                <button type="button" className={"btn btn-primary " + (isValid()? '' : 'disabled')} onClick={handleSend}>Skicka</button>
            </div>
        </div>
        :
        <div className="center-container">
            <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        }
        </>
    )
}

export default RegForm;