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
    <h2 className="text-3xl mb-4">Deltagare</h2>
    <ol className="list-decimal list-inside grid grid-cols-fluid">
      {participants.normalParticipants.map((participant, index) =>
        <li key={index}>{participant}</li>
      )}
    </ol>
    {participants.reservParticipants.length > 0 &&
    <>
    <h2 className="text-3xl mb-1 mt-4">Reservlista</h2>
    <p className="mb-4">Observera att reservplatser inte garanterar en plats på årsfesten</p>
    <ol className="list-decimal list-inside grid grid-cols-fluid">
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