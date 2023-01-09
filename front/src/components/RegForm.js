import React from "react";
import { useState, useEffect } from "react";
import { createParticipant, getRegStatus } from '../services/participants'

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

const LoadingPage = () => {
  return (
    <div className="center-container">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

const RegResponse = ({ regResponse }) => {
  if (regResponse.type === 'success') {
    return (
      <>
      {regResponse.message === 'full' ?
        <div>
          <h2 className="page-content-title">Tack för din anmälan till TFs 150:nde årsfest!</h2>
          <br />
          <h2 className="page-content-list">Din anmälan har tagits emot och Ni har placerats på reservlistan.</h2>
          <br />
          <p className="page-content-list">Vi fyller på lediga platser till årsfesten från reservlistan i den ordning som anmälningarna gjorts.</p>
          <p className="page-content-list">Ni blir kontaktade via epost ifall Ni rymms med på årsfesten.</p>
        </div>
      :
        <div>
          <h2 className="page-content-title">Välkommen på TFs 150:nde årsfest!</h2>
          <br />
          <h2 className="page-content-list">Din anmälan har tagits emot.</h2>
          <br />
          <p className="page-content-list">Observera att anmälan går att avboka tills 14.2, varefter den blir bindande.</p>
        </div>
      }
      </>
    )
  }

  return (
    <div>
      <h2 className="page-content-title">Något gick fel när din anmälan behandlades</h2>
      <p className="page-content-list">{regResponse.message}</p>
    </div>
  )
}
  
const RegForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    avec: '',
    seating: '',
    menu: "Fisk",
    allergies: '',
    representing: '',
    comment: '',
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
  const [regResponse, setRegResponse] = useState({
    message: null,
    type: null
  })

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
    try {
      const response = await createParticipant(formData)
      setRegResponse({ type: 'success', message: response });
      setFormSending(false);
    } catch (error) {
      setRegResponse({ type: 'error', message: error.message });
    }
  }

  const isValid = () => {
    const valid = (
        formData.name !== '' &&
        formData.email !== '' &&
        checkData.foto &&
        checkData.gdpr
    )
    return valid;
  }
    
  if (!regStatus.invitedOpen && !regStatus.normalOpen)
    return <RegClosed />;

  if (regStatus.isFull && regStatus.invitedOpen)
    return <InvitedRegFull />;

  if (regResponse.type)
    return <RegResponse regResponse={regResponse}/>

  if (formSending)
    return <LoadingPage />
  
  const labelClass = 'block mb-2 text-sm font-medium text-gray-900'
  const textInputClass = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
  const checkboxLabelClass = 'ml-2 text-sm font-medium text-gray-900 '
  const checkboxInputClass = 'w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'
  const submitButtonClass = 'px-8 py-3 text-white bg-blue-600 rounded focus:outline-none disabled:opacity-25'
  const formSelectClass = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'

  return (
    <div className="grid gap-6 mb-6 md:grid-cols-1">
    {/* Registration full */}
    {regStatus.isFull && regStatus.normalOpen &&
      <p className="page-content-text">
        Alla platser till årsfesten är reserverade, men det går ännu att anmäla sig till en reservplats.
      </p>            
    }
      {/* Name */}
      <div className="mb-3">
        <label htmlFor="name" className={labelClass}>* Namn (för- och efternamn)</label>
        <input type="text" className={textInputClass} id="name"
          name="name" value={formData.name} onChange={handleChange} />
      </div>
      {/* Email */}
      <div className="mb-3">
        <label htmlFor="email" className={labelClass}>* Epost</label>
        <input type="email" className={textInputClass} id="email"
          name="email" value={formData.email} onChange={handleChange} />
      </div>
      {/* Price */}
      <div className="mb-3">
        <label htmlFor="price" className={labelClass}>* Jag deltar med...</label>
        <select type="number" className={formSelectClass} id="price" value={formData.price}
          name="price" onChange={handleChange}>
          <option value={100}>Supékort studerande (100€)</option>
          <option value={120}>Supékort övriga (120€)</option>
          <option value={300}>Understödspris (300€)</option>
        </select>
      </div>
      {/* Avec */}
      <div className="mb-3">
        <label htmlFor="avec" className={labelClass}>
          Namn på avec (lämna tomt om du inte deltar med en avec, observera att också avecer ska skicka in personlig deltagaranmälan)
        </label>
        <input type="avec" className={textInputClass} id="avec"
          name="avec" value={formData.avec} onChange={handleChange} />
      </div>
      {/* Seating */}
      <div className="mb-3">
        <label htmlFor="seating" className={labelClass}>
          Önskat bordssällskap (namn eller gruppnamn)
        </label>
        <input type="seating" className={textInputClass} id="seating"
          name="seating" value={formData.seating} onChange={handleChange} />
      </div>
      {/* Sillis */}
      <div className="form-check mb-3">
        <input className={checkboxInputClass} type="checkbox" value={formData.sillis} defaultChecked={formData.sillis}
        id="sillis" name="sillis" onChange={handleCheckChange} />
        <label className={checkboxLabelClass} htmlFor="sillis">
        Jag vill anmäla mig till sillisen i samband med deltagaranmälan (12€)
        </label>
      </div>
      {/* Solenn */}
      <div className="form-check mb-3">
        <input className={checkboxInputClass} type="checkbox" value={formData.solenn} defaultChecked={formData.solenn}
        id="solenn" name="solenn" onChange={handleCheckChange} />
        <label className={checkboxLabelClass} htmlFor="solenn">
          Jag vill delta i den solenna akten för att framföra en hälsning åt jubilaren
        </label>
      </div>
      {/* Representing */}
      <div className="mb-3">
        <label htmlFor="representing" className={labelClass}>
          Förening eller instans som du representerar
        </label>
        <input type="representing" className={textInputClass} id="representing"
          name="representing" value={formData.representing} onChange={handleChange} />
      </div>
      {/* Alcohol */}
      <div className="form-check mb-3">
        <input className={checkboxInputClass} type="checkbox" defaultChecked={formData.alcohol} value={formData.alcohol}
          id="alcohol" name="alcohol" onChange={handleCheckChange} />
        <label className={checkboxLabelClass} htmlFor="alcohol">
          Alkohol
        </label>
      </div>
      {/* Menu */}
      <div className="mb-3">
        <label htmlFor="menu" className={labelClass}>* Meny</label>
        <select className={formSelectClass} id="menu" value={formData.menu}
          name="menu" onChange={handleChange}>
          <option value={"Fisk"}>Fisk</option>
          <option value={"Vegan"}>Vegan</option>
        </select>
      </div>
      {/* Allergies */}
      <div className="mb-3">
        <label htmlFor="allergies" className={labelClass}>Allergier och specialdieter</label>
        <input type="allergies" className={textInputClass} id="allergies"
          name="allergies" value={formData.allergies} onChange={handleChange} />
      </div>
      {/* Comment */}
      <div className="mb-3">
        <label htmlFor="comment" className={labelClass}>Kommentarer</label>
        <textarea rows={4} type="specialdieter" className={textInputClass} id="comment"
          name="comment" value={formData.comment} onChange={handleChange} />
      </div>
      {/* Visible */}
      <div className="form-check mb-3">
        <input className={checkboxInputClass} type="checkbox" defaultChecked={formData.visible} value={formData.visible}
          id="visible" name="visible" onChange={handleCheckChange} />
        <label className={checkboxLabelClass} htmlFor="visible">
          Jag vill att mitt namn ska synas i den öppna deltagarlistan
        </label>
      </div>
      {/* Photo guidelines */}
      <div className="mandatory-field">
        <div className="form-check mb-3">
          <input className={checkboxInputClass} type="checkbox" defaultChecked={checkData.foto} value={checkData.foto}
            id="foto" name="foto" onChange={handleCheckChange} />
          <label className={checkboxLabelClass} htmlFor="foto">
            * Jag har läst informationen om fotografering under årsfesten. Ifall jag inte vill bli fotograferad under årsfesten följer jag de anvisningar som getts på “Fotoinfo”-fliken.
          </label>
        </div>
      </div>
      {/* GDPR */}
      <div className="mandatory-field">
        <div className="form-check mb-3">
          <input className={checkboxInputClass} type="checkbox" defaultChecked={checkData.gdpr} value={checkData.gdpr}
            id="gdpr" name="gdpr" onChange={handleCheckChange} />
          <label className={checkboxLabelClass} htmlFor="gdpr">
            * Jag godkänner att mina personuppgifter används för festens förverkligande. Uppgifterna raderas senast 14 dagar efter ordnandet av festen.
          </label>
        </div>
      </div>
      {/* Send form button */}
      <div className="form-btn-container">
        {isValid() ?
        <button type="button" className={submitButtonClass} onClick={handleSend}>Skicka</button>
        :
        <button type="button" className={submitButtonClass} onClick={handleSend} disabled>Skicka</button>
      } 
        
      </div>
    </div>
  )
}

export default RegForm;