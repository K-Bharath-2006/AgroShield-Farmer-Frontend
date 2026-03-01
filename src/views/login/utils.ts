import {API} from '../../api/api';

export const loginUser = async (idToken: string) => {
  const response = await fetch(API.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({idToken}),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }

  return response.json();
};
