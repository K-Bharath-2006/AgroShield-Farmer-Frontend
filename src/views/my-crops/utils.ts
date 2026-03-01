/* eslint-disable prettier/prettier */
import {API} from '../../api/api';

export const getMyCrops = async (token: string) => {
  const response = await fetch(API.GET_MY_CROPS, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch crops');
  }

  const data = await response.json();

  // backend sends: { success, count, data }
  return data.data;
};
