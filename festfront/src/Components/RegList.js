import axios from "axios";
import { useState, useEffect } from "react";

const RegList = () => {
  const [participants, setParticipants] = useState({
    normalParticipants: [],
    reservParticipants: []
  });

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_API_URL}/api/participants`)
    .then(returnedParticipants => {
      console.log(returnedParticipants.data);
      setParticipants(returnedParticipants.data);
    })
  }, [])

  return (
    <>
    <h2 className="page-content-title">Deltagare</h2>
      <ol className="reg-ol">
        {participants.normalParticipants.map((participant, index) =>
          <li key={index}>{participant}</li>
        )}
      </ol>
      <h2 className="page-content-title">Reservlista (Observera att dessa inte garanterar en plats på årsfesten):</h2>
      <ol className="reg-ol">
        {participants.reservParticipants.map((participant, index) =>
          <li key={index}>{participant}</li>
        )}
      </ol>

    </>
  )
}


export default RegList;