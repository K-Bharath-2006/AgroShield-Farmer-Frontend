const BASE_URL = 'http://10.235.73.114:3040';

export const API = {
  REGISTER: `${BASE_URL}/api/auth/register`,
  LOGIN: `${BASE_URL}/api/auth/login`,
  CREATE_CROP: `${BASE_URL}/api/crops`,
  GET_MY_CROPS: `${BASE_URL}/api/crops`,
  GET_MY_CROP: `${BASE_URL}/api/crops`,
  RAISE_CLAIM: `${BASE_URL}/api/claims/raise`,
  GET_CURRENT_WEATHER: `${BASE_URL}/api/weather/today`,
  GET_MY_CLAIMS: `${BASE_URL}/api/claims/my`,
  GET_CLAIM_DETAILS: `${BASE_URL}/api/claims`,

};
