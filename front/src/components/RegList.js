import React from "react";
import { useState, useEffect } from "react";
import { getParticipants } from '../services/participants'

const RegList = () => {
  const [participants, setParticipants] = useState({
    normalParticipants: [],
    reservParticipants: []
  });

  useEffect(() => {
    const fetchData = async () => {
      setParticipants(await getParticipants());
    }
    fetchData()
  }, [])

  return (
    <>
    <h2 className="page-content-title">Deltagare</h2>
    <ol className="reg-ol">
      {participants.normalParticipants.map((participant, index) =>
        <li key={index}>{participant}</li>
      )}
    </ol>
    {participants.reservParticipants.length > 0 &&
    <>
    <h2 className="page-content-title">Reservlista (Observera att dessa inte garanterar en plats på årsfesten):</h2>
    <ol className="reg-ol">
      {participants.reservParticipants.map((participant, index) =>
        <li key={index}>{participant}</li>
      )}
    </ol>
    </>
    }
    </>
  )
}


export default RegList;