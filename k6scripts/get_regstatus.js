import http from 'k6/http';

export const options = {
  duration: '10s',
  vus: 10,
  summaryTrendStats: ['avg', 'med', 'p(95)', 'p(99)'],
};

const URL = 'http://localhost:5000'

export default () => {
  http.get(`${URL}/api/regstatus`);
}