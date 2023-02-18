import React from "react";
import { useState, useEffect } from "react";
import { createParticipant, getRegStatus } from '../services/participants';
import LoadingView from "./LoadingView";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import RadioButtonGroup from "./RadioButtonGroup";

const RegClosed = () => {
  return (
    <>
    <h2 className="text-3xl mb-4">Deltagaranmälan</h2>
    <p className="mb-3">
      Anmälan för inbjudna gäster öppnar på denna sida den 9 februari klockan 12 och stänger 16 februari.
    </p>
    <p className="mb-3">  
      Den öppna anmälan för alla TFare samt deras avecer öppnar den 20 februari klockan 12.
      Vänligen observera att avecer bör fylla i sin egen anmälan.
    </p>
    </>
  )
}

const RegResponse = ({ regResponse }) => {
  if (regResponse.type === 'success') {
    return (
      <>
      {regResponse.message === 'full' ?
        <div>
          <h2 className="text-3xl mb-4">Tack för din anmälan till TFs 151:a årsfest!</h2>
          <p className="mb-3">Din anmälan har tagits emot och Ni har placerats på reservlistan.</p>
          <p>Vi fyller på lediga platser till årsfesten från reservlistan i den ordning som anmälningarna gjorts.</p>
          <p>Ni blir kontaktade via epost ifall Ni rymms med på årsfesten.</p>
        </div>
      :
        <div>
          <h2 className="text-3xl mb-4">Välkommen på TFs 151:a årsfest!</h2>
          <p className="mb-3">Din anmälan har tagits emot.</p>
          <p>Observera att anmälan går att avboka tills 26.2, varefter den blir bindande.</p>
        </div>
      }
      </>
    )
  }

  return (
    <div>
      <h2 className="text-3xl mb-4">Något gick fel när din anmälan behandlades</h2>
      <p>{regResponse.message}</p>
    </div>
  )
}

const RegForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    avec: '',
    seating: '',
    allergies: '',
    representing: '',
    comment: '',
    price: null,
    sillis: false,
    solenn: false,
    alcohol: null,
    visible: false
  });
  const [checkData, setCheckData] = useState({
    foto: false,
    gdpr: false
  });
  const [actionPending, setActionPending] = useState(true);
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
      setActionPending(false);
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
    setActionPending(true);
    try {
      const response = await createParticipant(formData)
      setRegResponse({ type: 'success', message: response });
      setActionPending(false);
    } catch (error) {
      setRegResponse({ type: 'error', message: error.message });
    }
  }

  const isValid = () => {
    const valid = (
        formData.name !== '' &&
        formData.email !== '' &&
        formData.price !== null &&
        formData.alcohol !== null &&
        checkData.foto &&
        checkData.gdpr
    )
    return valid;
  }


  if (actionPending)
    return <LoadingView />

  if (!regStatus.invitedOpen && !regStatus.normalOpen)
    return <RegClosed />;

  if (regResponse.type)
    return <RegResponse regResponse={regResponse}/>


  return (
    <div className="grid gap-6 mb-6 md:grid-cols-1">
    {/* Registration full */}
    {regStatus.isFull &&
      <p className="mb-3">
        Alla platser till årsfesten är reserverade, men det går ännu att anmäla sig till en reservplats.
      </p>            
    }
      {/* Name */}
      <TextInput id="name" onChange={handleChange} value={formData.name}
        text="* Namn (för- och efternamn)"
      />
      {/* Email */}
      <TextInput id="email" onChange={handleChange} value={formData.email}
        text="* Epost"
      />
      {/* Price */}
      <RadioButtonGroup name="price" onChange={handleChange}
        labelText="* Jag deltar med..." 
        options={[
          {name: "student", value: 85, text: "Supékort studerande (85€)"},
          {name: "other", value: 95, text: "Supékort övriga (95€)"},
          {name: "support", value: 151, text: "Understödspris (151€)"}
        ]}  
      />
      {/* Alcohol */}
      <RadioButtonGroup name="alcohol" onChange={handleChange}
        labelText="* Alkohol?" 
        options={[
          {name: "true", value: true, text: "Ja tack!"},
          {name: "false", value: false, text: "Nej tack!"},
        ]}  
      />
      {/* Allergies */}
      <TextInput id="allergies" onChange={handleChange} value={formData.allergies}
        text="Allergier och specialdieter"
      />
      {/* Avec */}
      <TextInput id="avec" onChange={handleChange} value={formData.avec}
        text="Namn på avec. Observera att avecen måste skicka in en egen anmälan"
      />
      {/* Seating */}
      <TextInput id="seating" onChange={handleChange} value={formData.seating}
        text="Önskat bordssällskap (namn eller gruppnamn)"
      />
      {/* Solenn */}
      <Checkbox id="solenn" onChange={handleCheckChange} value={formData.solenn}
        text="Jag vill delta i den solenna akten för att framföra en hälsning åt jubilaren"
      />
      {/* Representing */}
      <TextInput id="representing" onChange={handleChange} value={formData.representing}
        text="Förening eller instans som ni representerar på solenna akten"
      />
      {/* Sillis */}
      <Checkbox id="sillis" onChange={handleCheckChange} value={formData.sillis}
        text="Jag vill anmäla mig till sillisen i samband med deltagaranmälan (16€)"
      />
      {/* Comment */}
      <div className="mb-3">
        <label htmlFor="comment" className='block mb-2 text-sm font-medium hover:text-[#ceb886]'>
          Övriga kommentarer till arrangörerna
        </label>
        <textarea className='bg-inherit border border-[#ddcdaa] focus:ring-[#ddcdaa] text-sm rounded-lg block w-full p-2.5 hover:text-[#ceb886] hover:border-[#ceb886] focus:border-[#ceb886] focus:outline-none'
           type="text" id="comment" name="comment" rows={4} 
           value={formData.comment} onChange={handleChange} 
        />
      </div>
      {/* Visible */}
      <Checkbox id="visible" onChange={handleCheckChange} value={formData.visible}
        text="Jag vill att mitt namn ska synas i den öppna deltagarlistan"
      />
      {/* Photo guidelines */}
      <Checkbox id="foto" onChange={handleCheckChange} value={formData.foto}
        text="* Jag har läst informationen om fotografering under årsfesten. Ifall jag inte vill bli fotograferad under årsfesten följer jag de anvisningar som getts på “Fotoinfo”-fliken."
      />
      {/* GDPR */}
      <Checkbox id="gdpr" onChange={handleCheckChange} value={formData.gdpr}
        text="* Jag godkänner att mina personuppgifter används för festens förverkligande. Uppgifterna raderas senast 14 dagar efter ordnandet av festen."
      />
      {/* Send form button */}
      <div className="form-btn-container">
        <button className='px-8 py-3 text-[#011b17] bg-[#ddcdaa] rounded hover:enabled:bg-[#ceb886] disabled:opacity-40'
          type="button" onClick={handleSend} disabled={!isValid()}
        >
          Skicka
        </button>
      </div>
    </div>
  )
}

export default RegForm;