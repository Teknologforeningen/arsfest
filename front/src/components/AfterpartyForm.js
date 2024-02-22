import React from 'react';
import { useState, useEffect } from 'react';
import {
  createAfterpartyParticipant,
  getAfterpartyRegStatus,
} from '../services/participants';
import LoadingView from './LoadingView';
import TextInput from './TextInput';
import Checkbox from './Checkbox';

const AfterpartyInfo = () => {
  return (
    <>
      <h2 className="text-3xl mb-4">Efterfestanmälan</h2>
      <p className="mb-6">
        <b>
          Obs! Efterfesten ingår i banketten, så denna anmälan är endast för de
          som inte deltar på banketten!{' '}
        </b>
      </p>
      <p className="mb-3">
        Fick du inte plats till banketten eller är du annars bara sugen på att
        efterfesta? Frukta inte, här kan du köpa din efterfestbiljett!
      </p>
      <p className="mb-6">
        Efterfestens dörrar öppnar cirka 23.00. Efterfestens pris är 12€.
      </p>
      <p className="mb-6">
        Observera att vi INTE säljer biljetter vid dörren, det gäller alltså att
        köpa din biljett NU!
      </p>
      <p className="mb-6">
        Vad? Årsfestens efterfest! <br />
        När? 16.3.2024 kl. 23:00-3:30 <br />
        Var? TF, Otsvängen 22, Esbo <br />
        Vem? Alla! <br />
        Dresscode? Cocktail <br />
        Pris? 12€ <br />
        Försäljning? Måndagen 26.2 kl. 14:00 via kide.app!
      </p>
      <p className="mb-6">
        Länk till efterfestanmälan:
        <a
          href="https://kide.app/events/674fc4d0-b2ff-4463-9ff6-d4ab1c242abc"
          className="ml-2 underline"
          target="_blank"
        >
          Kide.app
        </a>
      </p>
    </>
  );
};

// const RegClosed = ({ message }) => {
//   return (
//     <>
//       <AfterpartyInfo />
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
//         <h2 className="text-3xl mb-4">Välkommen på efterfest!</h2>
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

// const AfterpartyForm = () => {
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
//       setRegStatus(await getAfterpartyRegStatus());
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
//       const response = await createAfterpartyParticipant(formData)
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
//     return <RegClosed message="Anmälan till efterfesten öppnar 1.3 kl 12:00 på denna sida och stänger 10.3." />

//   if (regStatus.isFull)
//     return <RegClosed message="Efterfesten är fullbokad." />

//   if (regResponse.type)
//     return <RegResponse regResponse={regResponse} />

//   return (
//     <>
//       <AfterpartyInfo />
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

export default AfterpartyInfo;
