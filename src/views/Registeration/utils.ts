import {API} from '../../api/api';

export const registerUser = async (data: {
  name: string;
  phoneNumber: string;
  district: string;
  taluk: string;
}) => {

  const response = await fetch(API.REGISTER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${global.authToken}`, // 🔐 REQUIRED
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || 'Registration failed');
  }

  return responseData;
};