import axios from "axios";
import { useState, useEffect } from "react";

const RegList = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_API_URL}/api/participants`)
    .then(returnedParticipants => {
      setParticipants(returnedParticipants.data);
    })
  }, [])

  return (
    <>
    <h2 className="page-content-title">Deltagare</h2>
      <ol className="reg-ol">
        {participants.map((participant, index) =>
          <li key={index}>{participant}</li>
        )}
      </ol>
    </>
  )
}


export default RegList;