import React from "react";
import { useState, useEffect } from "react";
import { createParticipant, getRegStatus } from '../services/participants'


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

const TextInput = ({ id, text, onChange, value }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className='block mb-2 text-sm font-medium hover:text-[#ceb886]'>
        {text}
      </label>
      <input className='bg-inherit border border-[#ddcdaa] focus:ring-[#ddcdaa] text-sm rounded-lg block w-full p-2.5 hover:text-[#ceb886] hover:border-[#ceb886] focus:border-[#ceb886] focus:outline-none'
        type="text" id={id} name={id} value={value} onChange={onChange}/>
    </div>
  )
}

const CheckBox = ({ id, text, onChange, value }) => {
  return (
    <div className="form-check mb-3">
      <input className='w-4 h-4 border border-gray-300 rounded bg-gray-50 accent-[#ddcdaa]'
        type="checkbox" id={id} name={id} value={value} onChange={onChange} />
      <label htmlFor={id} className='ml-2 text-sm font-medium hover:text-[#ceb886]' >
        {text}
      </label>
    </div>
  )
}

const RadioButtonGroup = ({ name, labelText, options, onChange }) => {
  return (
    <div className="mb-3">
      <label className="block mb-2 text-sm font-medium">{labelText}</label>
      <ul className="items-center w-full  text-sm font-medium bg-inherit border border-[#ddcdaa] rounded-lg">
        {options.map(option => {
          const optionId = `${name}-${option.name}`
          return (
            <li className="w-full border-b border-[#ddcdaa] rounded-t-lg">
              <div className="flex items-center pl-3 hover:border-[#ceb886]">
                <input type="radio" className='accent-[#ddcdaa] w-4 h-4 bg-[#011b17] border-[#ddcdaa] focus:ring-[#ddcdaa] focus:ring-1'
                  id={optionId} name={name} value={option.value} onChange={onChange} />
                <label htmlFor={optionId} className='w-full py-3 ml-2 text-sm font-medium hover:text-[#ceb886]'>
                  {option.text} 
                </label>
              </div>
            </li>
          )
        })}
      </ul>        
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
    console.log(event.target)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleCheckChange = (event) => {
    console.log(event.target)
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
    return <LoadingPage />

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
      <CheckBox id="solenn" onChange={handleCheckChange} value={formData.solenn}
        text="Jag vill delta i den solenna akten för att framföra en hälsning åt jubilaren"
      />
      {/* Representing */}
      <TextInput id="representing" onChange={handleChange} value={formData.representing}
        text="Förening eller instans som ni representerar på solenna akten"
      />
      {/* Sillis */}
      <CheckBox id="sillis" onChange={handleCheckChange} value={formData.sillis}
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
      <CheckBox id="visible" onChange={handleCheckChange} value={formData.visible}
        text="Jag vill att mitt namn ska synas i den öppna deltagarlistan"
      />
      {/* Photo guidelines */}
      <CheckBox id="foto" onChange={handleCheckChange} value={formData.foto}
        text="* Jag har läst informationen om fotografering under årsfesten. Ifall jag inte vill bli fotograferad under årsfesten följer jag de anvisningar som getts på “Fotoinfo”-fliken."
      />
      {/* GDPR */}
      <CheckBox id="gdpr" onChange={handleCheckChange} value={formData.gdpr}
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