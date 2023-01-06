import http from 'k6/http';

export const options = {
  duration: '10s',
  vus: 10,
};

const URL = 'http://localhost:5000'

const participantData = {
  name: "Some name",
  email: "address@gmail.com",
  price: 1000,
  avec: "test avec",
  seating: "Min kompis",
  sillis: true,
  solenn: true,
  representing: "tf",
  alcohol: true,
  menu: "Stora ja",
  allergies: "Nej",
  comment: "aa",
  visible: true
}

export default () => {
  const res = http.post(`${URL}/api/participant`, JSON.stringify(participantData), {
    headers: { 'Content-Type': 'application/json' },
  });
};
