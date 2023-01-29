import React from "react";
import { useState, useEffect } from "react";
import { createParticipant, getRegStatus } from '../services/participants'

const InvitedRegFull = () => {
  return (
    <>
    <h2 className="page-content-title">Deltagaranmälan</h2>
    <p className="page-content-text">
      Kvoten för inbjudna gäster är fylld. 
      Det går ännu att anmäla sig med den öppna anmälan som öppnar 20.2 kl 12.
    </p>
    </> 
  )
}

const RegClosed = () => {
  return (
    <>
    <h2 className="page-content-title">Deltagaranmälan</h2>
    <p className="page-content-text">
      Anmälan för inbjudna gäster öppnar på denna sida den 9 februari klockan 12 och stänger 16 februari.
      Den öppna anmälan för alla TFare samt deras avecer öppnar den 20 februari klockan 12.
      Vänligen observera att avecer bör fylla i sin egen anmälan.
    </p>
    </>
  )
}

const LoadingPage = () => {
  return (
    <div className="text-center">
      <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
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
          <h2 className="page-content-title">Tack för din anmälan till TFs 151:a årsfest!</h2>
          <br />
          <p>Din anmälan har tagits emot och Ni har placerats på reservlistan.</p>
          <br />
          <p>Vi fyller på lediga platser till årsfesten från reservlistan i den ordning som anmälningarna gjorts.</p>
          <p>Ni blir kontaktade via epost ifall Ni rymms med på årsfesten.</p>
        </div>
      :
        <div>
          <h2 className="page-content-title">Välkommen på TFs 151:a årsfest!</h2>
          <br />
          <p>Din anmälan har tagits emot.</p>
          <br />
          <p>Observera att anmälan går att avboka tills 26.2, varefter den blir bindande.</p>
        </div>
      }
      </>
    )
  }

  return (
    <div>
      <h2 className="page-content-title">Något gick fel när din anmälan behandlades</h2>
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
    menu: "Fisk",
    allergies: '',
    representing: '',
    comment: '',
    price: 85,
    sillis: false,
    solenn: false,
    alcohol: false,
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
        checkData.foto &&
        checkData.gdpr
    )
    return valid;
  }
    
  if (actionPending)
    return <LoadingPage />

  if (!regStatus.invitedOpen && !regStatus.normalOpen)
    return <RegClosed />;

  if (regStatus.isFull && regStatus.invitedOpen)
    return <InvitedRegFull />;

  if (regResponse.type)
    return <RegResponse regResponse={regResponse}/>
  
  const labelClass = 'block mb-2 text-sm font-medium hover:text-[#ceb886]'
  const textInputClass = 'bg-inherit border border-[#ddcdaa] focus:ring-[#ddcdaa] text-sm rounded-lg block w-full p-2.5 hover:text-[#ceb886] hover:border-[#ceb886] focus:border-[#ceb886] focus:outline-none'
  const checkboxLabelClass = 'ml-2 text-sm font-medium hover:text-[#ceb886]'
  const checkboxInputClass = 'w-4 h-4 border border-gray-300 rounded bg-gray-50 accent-[#ddcdaa]'
  const submitButtonClass = 'px-8 py-3 text-[#011b17] bg-[#ddcdaa] rounded hover:enabled:bg-[#ceb886] disabled:opacity-40'
  const formSelectClass = 'bg-inherit border border-[#ddcdaa] text-sm rounded-lg block w-full p-2.5 hover:text-[#ceb886] hover:border-[#ceb886] focus:border-[#ceb886] focus:outline-none'
  const selectOptionClass = 'bg-[#ddcdaa] text-[#011b17] focus:bg-[#ceb886] hover:bg-[#ceb886]'
  const radioLabelClass = 'w-full py-3 ml-2 text-sm font-medium hover:text-[#ceb886]'
  const radioButtonClass = 'accent-[#ddcdaa] w-4 h-4 bg-[#011b17] border-[#ddcdaa] focus:ring-[#ddcdaa] focus:ring-1'
  const radioGroupClass = ''

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
        <label className="block mb-2 text-sm font-medium">* Jag deltar med...</label>
        <ul className="items-center w-full  text-sm font-medium bg-inherit border border-[#ddcdaa] rounded-lg">
          <li className="w-full border-b border-[#ddcdaa] rounded-t-lg">
            <div className="flex items-center pl-3 hover:border-[#ceb886]">
              <input type="radio" className={radioButtonClass} id="price-student" 
                name="price" value={85} onChange={handleChange} />
              <label htmlFor="price-student" className={radioLabelClass}>
                Supékort studerande (85€) 
              </label>
            </div>
          </li>
          <li className="w-full border-b border-[#ddcdaa] rounded-t-lg">
            <div className="flex items-center pl-3">
              <input type="radio" className={radioButtonClass} id="price-other" 
                name="price" value={95} onChange={handleChange} />
              <label htmlFor="price-other" className={radioLabelClass}>
                Supékort övriga (95€)
              </label>
            </div>
          </li>
          <li className="w-full border-b border-[#ddcdaa] rounded-t-lg">
            <div className="flex items-center pl-3">
              <input type="radio" className={radioButtonClass} id="price-support" 
                name="price" value={151} onChange={handleChange} />
              <label htmlFor="price-support" className={radioLabelClass}>
                Understödspris (151€)
              </label>
            </div>
          </li>
        </ul>        
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
        <label htmlFor="menu" className="block mb-2 text-sm font-medium">* Meny</label>
        <ul className="items-center w-full  text-sm font-medium bg-inherit border border-[#ddcdaa] rounded-lg">
          <li className="w-full border-b border-[#ddcdaa] rounded-t-lg">
            <div className="flex items-center pl-3 hover:border-[#ceb886]">
              <input type="radio" className={radioButtonClass} id="menu-fish" 
                name="menu" value="Fisk" onChange={handleChange} />
              <label htmlFor="menu-fish" className={radioLabelClass}>
                Fisk 
              </label>
            </div>
          </li>
          <li className="w-full border-b border-[#ddcdaa] rounded-t-lg">
            <div className="flex items-center pl-3">
              <input type="radio" className={radioButtonClass} id="menu-vegan" 
                name="menu" value="Vegan" onChange={handleChange} />
              <label htmlFor="menu-vegan" className={radioLabelClass}>
                Vegan
              </label>
            </div>
          </li>
        </ul>
      </div>
      {/* Allergies */}
      <div className="mb-3">
        <label htmlFor="allergies" className={labelClass}>Allergier och specialdieter</label>
        <input type="allergies" className={textInputClass} id="allergies"
          name="allergies" value={formData.allergies} onChange={handleChange} />
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
        Jag vill anmäla mig till sillisen i samband med deltagaranmälan (16€)
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

      {/* Comment */}
      <div className="mb-3">
        <label htmlFor="comment" className={labelClass}>Övriga kommentarer till arrangörerna</label>
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