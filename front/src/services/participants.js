import axios from 'axios'

let baseUrl = '/api'
if (!process.env.GATSBY_PROD){
  const api_host = process.env.GATSBY_API_HOST || 'localhost'
  const api_port = process.env.GATSBY_API_PORT || '5000'
  baseUrl = `http://${api_host}:${api_port}/api`  
}

export const createParticipant = async (participant) => {
  const response = await axios.post({ ...participant })
}

export const getParticipants = async () => {
  const response = await axios.get(`${baseUrl}/participants`)
  return response.data
}

export const getRegStatus = async () => {

}