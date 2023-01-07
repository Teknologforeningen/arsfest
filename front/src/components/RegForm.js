import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { navigate } from "@reach/router"
import { createParticipant, getRegStatus } from '../services/participants'
import { setErrorMessage } from "../ErrorMessage";

const InvitedRegFull = () => {
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
      Anmälan för inbjudna gäster öppnar 31.1 kl 12 och stänger 6.2 kl 23:59. 
      Den öppna anmälan öppnar 7.2 kl 12 och stänger 14.2 kl 23:59.
    </p>
    </>
  )
}  
  
const RegForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avec: "",
    seating: "",
    menu: "Fisk",
    allergies: "",
    representing: "",
    comment: "",
    price: 100,
    sillis: false,
    solenn: false,
    alcohol: false,
    visible: false
  });
  const [checkData, setCheckData] = useState({
    foto: false,
    gdpr: false
  });
  const [formSending, setFormSending] = useState(false);
  const [regStatus, setRegStatus] = useState({
    isFull: false,
    invitedOpen: true,
    normalOpen: true
  });

  useEffect(() => {
  const fetchData = async () => {
    setRegStatus(await getRegStatus());
  }
  fetchData()
  }, [])

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
    // axios.post(`${process.env.REACT_APP_API_URL}/api/participant`, dataToSend)
    axios.post(`http://localhost:5000/api/participant`, dataToSend)
    .then((response) => {
      // console.log(response);
      if (response.data === 'full') {
        navigate("/anmalansucceereserv/");
      } else {
        navigate("/anmalansuccee/");
      }
    })
    .catch((error) => {
      console.log(error);
      // setErrorMessage(error.request.response);
      navigate("/anmalanmisslyckad/");
    })
  }

  const isValid = () => {
    const valid = (
        formData.name !== "" &&
        formData.email !== "" &&
        checkData.foto &&
        checkData.gdpr
    )
    return valid;
  }
  
  if (!regStatus.invitedOpen && !regStatus.normalOpen)
    return <RegClosed />;

  if (regStatus.isFull && regStatus.invitedOpen)
    return <InvitedRegFull />;

  return (
    <>
    {!formSending?
  <div className="form-container">
    {/* Registration full */}
    {regStatus.isFull && regStatus.normalOpen &&
      <p className="page-content-text">
        Alla platser till årsfesten är reserverade, men det går ännu att anmäla sig till en reservplats.
      </p>            
    }
    {/* Name */}
    <div className="mb-3">
      <label htmlFor="name" className="form-label">* Namn (för- och efternamn)</label>
      <input type="text" className="form-control" id="name"
        name="name" value={formData.name} onChange={handleChange} />
    </div>
    {/* Email */}
    <div className="mb-3">
      <label htmlFor="email" className="form-label">* Epost</label>
      <input type="email" className="form-control" id="email"
        name="email" value={formData.email} onChange={handleChange} />
    </div>
    {/* Price */}
    <div className="mb-3">
      <label htmlFor="price" className="form-label">* Jag deltar med...</label>
      <select type="number" className="form-select" id="price" value={formData.price}
        name="price" onChange={handleChange}>
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
    {/* Seating */}
    <div className="mb-3">
      <label htmlFor="seating" className="form-label">
        Önskat bordssällskap (namn eller gruppnamn)
      </label>
      <input type="seating" className="form-control" id="seating"
        name="seating" value={formData.seating} onChange={handleChange} />
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
    {/* Representing */}
    <div className="mb-3">
      <label htmlFor="representing" className="form-label">
        Förening eller instans som du representerar
      </label>
      <input type="representing" className="form-control" id="representing"
        name="representing" value={formData.representing} onChange={handleChange} />
    </div>
    {/* Alcohol */}
    <div className="form-check mb-3">
      <input className="form-check-input" type="checkbox" defaultChecked={formData.alcohol} value={formData.alcohol}
        id="alcohol" name="alcohol" onChange={handleCheckChange} />
      <label className="form-check-label" htmlFor="alcohol">
        Alkohol
      </label>
    </div>
    {/* Menu */}
    <div className="mb-3">
      <label htmlFor="menu" className="form-label">* Meny</label>
      <select className="form-select" id="menu" value={formData.menu}
        name="menu" onChange={handleChange}>
        <option value={"Fisk"}>Fisk</option>
        <option value={"Vegan"}>Vegan</option>
      </select>
    </div>
    {/* Allergies */}
    <div className="mb-3">
      <label htmlFor="allergies" className="form-label">Allergier och specialdieter</label>
      <input type="allergies" className="form-control" id="allergies"
        name="allergies" value={formData.allergies} onChange={handleChange} />
    </div>
    {/* Buss */}
    {/* <div className="form-check mb-3">
      <input className="form-check-input" type="checkbox" defaultChecked={formData.buss} value={formData.buss}
        id="buss" name="buss" onChange={handleCheckChange} />
      <label className="form-check-label" htmlFor="buss">
        Jag vill ha busstransport från banketten till efterfesten på Urdsgjallar
      </label>
    </div> */}
    {/* Comment */}
    <div className="mb-3">
      <label htmlFor="comment" className="form-label">Kommentarer</label>
      <textarea rows={4} type="specialdieter" className="form-control" id="comment"
        name="comment" value={formData.comment} onChange={handleChange} />
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
        <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    }
    </>
  )
}

export default RegForm;