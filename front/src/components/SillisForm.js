import React from "react";
import { useState, useEffect } from "react";
import { createSillisParticipant, getSillisRegStatus } from '../services/participants';
import LoadingView from "./LoadingView";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";

const RegClosed = ({ message }) => {
  return (
    <>
    <h2 className="text-3xl mb-4">Sillisanmälan</h2>
    <p className="mb-3">
      <b>Obs!</b> Ifall du redan anmält dig till sillisen i samband med årsfestanmälan ska du inte anmäla dig här.
    </p>
    <p >
      {message}
    </p>
    </>
  )
}

const RegResponse = ({ regResponse }) => {
  if (regResponse.type === 'success') {
    return (
      <div>
        <h2 className="text-3xl mb-4">Välkommen på sillis!</h2>
        <p className="mb-3">Din anmälan har tagits emot.</p>
        <p>Observera att anmälan går att avboka tills 10.3, varefter den blir bindande.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-3xl mb-4">Något gick fel när din anmälan behandlades</h2>
      <p>{regResponse.message}</p>
    </div>
  )
}

const SillisForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [checkData, setCheckData] = useState({
    foto: false,
    gdpr: false
  });
  const [actionPending, setActionPending] = useState(true);
  const [regStatus, setRegStatus] = useState({
    isFull: false,
    regOpen: true,
  });
  const [regResponse, setRegResponse] = useState({
    message: null,
    type: null
  })

  useEffect(() => {
    const fetchData = async () => {
      setRegStatus(await getSillisRegStatus());
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
      const response = await createSillisParticipant(formData)
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
        checkData.foto &&
        checkData.gdpr
    )
    return valid;
  }


  if (actionPending)
    return <LoadingView />

  if (!regStatus.regOpen)
    return <RegClosed message="Anmälan till sillisen öppnar 20.2 kl 12:00 och stänger 10.3."/>;

  if (regStatus.isFull)
    return <RegClosed message="Sillisen är fullbokad."/>;

  if (regResponse.type)
    return <RegResponse regResponse={regResponse}/>

  return (
    <div className="grid gap-6 mb-6 md:grid-cols-1">
      <p className="mb-3">
        <b>Obs!</b> Ifall du redan anmält dig till sillisen i samband med årsfestanmälan ska du inte anmäla dig här.
      </p>
      <p className="mb-3">
        Infotext om sillisen
      </p>
      <TextInput id="name" onChange={handleChange} value={formData.name}
        text="* Namn (för- och efternamn)"
      />
      <TextInput id="email" onChange={handleChange} value={formData.email}
        text="* Epost"
      />
      <Checkbox id="foto" onChange={handleCheckChange} value={formData.foto}
        text="* Jag har läst informationen om fotografering under årsfesten. Ifall jag inte vill bli fotograferad under årsfesten följer jag de anvisningar som getts på “Fotoinfo”-fliken."
      />
      <Checkbox id="gdpr" onChange={handleCheckChange} value={formData.gdpr}
        text="* Jag godkänner att mina personuppgifter används för festens förverkligande. Uppgifterna raderas senast 14 dagar efter ordnandet av festen."
      />
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

export default SillisForm