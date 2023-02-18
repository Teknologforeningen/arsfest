import axios from 'axios'

let baseUrl = '/api'
if (!process.env.GATSBY_PROD){
  const api_host = process.env.GATSBY_API_HOST || 'localhost'
  const api_port = process.env.GATSBY_API_PORT || '5000'
  baseUrl = `http://${api_host}:${api_port}/api`  
}

export const createParticipant = async (participant) => {
  const response = await axios.post(`${baseUrl}/participant`, { ...participant })
  return response.data
}

export const getParticipants = async () => {
  const response = await axios.get(`${baseUrl}/participants`)
  return response.data
}

export const getRegStatus = async () => {
  const response = await axios.get(`${baseUrl}/regstatus`)
  return response.data
}

export const createSillisParticipant = async (participant) => {
  const response = await axios.post(`${baseUrl}/sillis/participant`, { ...participant })
  return response.data
}

export const getSillisRegStatus = async () => {
  const response = await axios.get(`${baseUrl}/sillis/regstatus`)
  return response.data
}

export const createAfterpartyParticipant = async (participant) => {
  const response = await axios.post(`${baseUrl}/afterparty/participant`, { ...participant })
  return response.data
}

export const getAfterpartyRegStatus = async () => {
  const response = await axios.get(`${baseUrl}/afterparty/regstatus`)
  return response.data
}
