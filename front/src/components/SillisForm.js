import React from "react";
import { useState, useEffect } from "react";
import { createSillisParticipant, getSillisRegStatus } from '../services/participants';
import LoadingView from "./LoadingView";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";

const SillisInfo = () => {
  return (
    <>
      <h2 className="text-3xl mb-4">Sillizanmälan</h2>
      <p className="mb-6">
        <b>OBS! Ifall du redan anmält dig till sillizen i samband med årsfestanmälan ska du inte anmäla dig här.</b>
      </p>
      <p className="mb-3">
        Efter en natt av dansande kommer ju såklart SILLIZEN! Dra på dig din halare och den perfekta sillizhatten och kom till TF för att njuta av mat, gott sällskap, bollhav och mimosa &lt;3
      </p>
      <p className="mb-3">
        Sillizen är inte bara för årsfestdeltagare utan vem som helst får komma!
      </p>
      <p className="mb-3">
        Vad? Årsfestsilliz! <br />
        När? 17.3.2024 kl. 12-18 <br />
        Var? TF, Otsvängen 22, Esbo <br />
        Vem? Alla! <br />
        Pris? 18€ på förhand / 20€ vid dörren
      </p>
      <p className="mb-6">
        Anmälan är bindande och ifall du inte kan komma får du själv hitta en ersättare.
      </p>
      <p className="mb-3 underline">
        Länk till sillizanmälan publiceras inom kort.
      </p>
    </>
  )
}

// const RegClosed = ({ message }) => {
//   return (
//     <>
//       <SillisInfo />
//       <p >
//         <b>{message}</b>
//       </p>
//     </>
//   )
// }

// const RegResponse = ({ regResponse }) => {
//   if (regResponse.type === 'success') {
//     return (
//       <div>
//         <h2 className="text-3xl mb-4">Välkommen på sillis!</h2>
//         <p className="mb-3">Din anmälan har tagits emot.</p>
//         <p className="mb-3">Observera att anmälan går att avboka tills 10.3, varefter den blir bindande.</p>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <h2 className="text-3xl mb-4">Något gick fel när din anmälan behandlades</h2>
//       <p>{regResponse.message}</p>
//     </div>
//   )
// }

// const SillisForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });
//   const [checkData, setCheckData] = useState({
//     foto: false,
//     gdpr: false
//   });
//   const [actionPending, setActionPending] = useState(true);
//   const [regStatus, setRegStatus] = useState({
//     isFull: false,
//     regOpen: true,
//   });
//   const [regResponse, setRegResponse] = useState({
//     message: null,
//     type: null
//   })

//   useEffect(() => {
//     const fetchData = async () => {
//       setRegStatus(await getSillisRegStatus());
//       setActionPending(false);
//     }
//     fetchData()
//   }, [])

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     })
//   }

//   const handleCheckChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.checked
//     });
//     setCheckData({
//       ...checkData,
//       [event.target.name]: event.target.checked
//     });
//   }

//   const handleSend = async () => {
//     setActionPending(true);
//     try {
//       const response = await createSillisParticipant(formData)
//       setRegResponse({ type: 'success', message: response });
//       setActionPending(false);
//     } catch (error) {
//       setRegResponse({ type: 'error', message: error.message });
//     }
//   }

//   const isValid = () => {
//     const valid = (
//       formData.name !== '' &&
//       formData.email !== '' &&
//       checkData.foto &&
//       checkData.gdpr
//     )
//     return valid;
//   }


//   if (actionPending)
//     return <LoadingView />

//   if (!regStatus.regOpen)
//     return <RegClosed message="Anmälan till sillisen öppnar 1.3 kl 12:00 på denna sida och stänger 10.3." />

//   if (regStatus.isFull)
//     return <RegClosed message="Sillisen är fullbokad." />

//   if (regResponse.type)
//     return <RegResponse regResponse={regResponse} />

//   return (
//     <>
//       <SillisInfo />
//       <div className="grid gap-6 mb-6 md:grid-cols-1">
//         <TextInput id="name" onChange={handleChange} value={formData.name}
//           text="* Namn (för- och efternamn)"
//         />
//         <TextInput id="email" onChange={handleChange} value={formData.email}
//           text="* Epost"
//         />
//         <Checkbox id="foto" onChange={handleCheckChange} value={formData.foto}
//           text="* Jag har läst informationen om fotografering under årsfesten. Ifall jag inte vill bli fotograferad under årsfesten följer jag de anvisningar som getts på “Fotoinfo”-fliken."
//         />
//         <Checkbox id="gdpr" onChange={handleCheckChange} value={formData.gdpr}
//           text="* Jag godkänner att mina personuppgifter används för festens förverkligande. Uppgifterna raderas senast 14 dagar efter ordnandet av festen."
//         />
//         <div className="form-btn-container">
//           <button className='px-8 py-3 text-[#011b17] bg-[#C0C0C0] rounded hover:enabled:bg-[#ceb886] disabled:opacity-40'
//             type="button" onClick={handleSend} disabled={!isValid()}
//           >
//             Skicka
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }

export default SillisInfo