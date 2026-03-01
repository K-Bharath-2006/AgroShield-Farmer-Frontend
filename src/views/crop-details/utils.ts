import {API} from '../../api/api';

export const getSingleCrop = async (cropId: string, token: string) => {
  const response = await fetch(`${API.GET_MY_CROP}/${cropId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch crop');
  }

  const data = await response.json();
  return data.data;
};
