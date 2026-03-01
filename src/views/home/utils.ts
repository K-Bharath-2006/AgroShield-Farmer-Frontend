import {API} from '../../api/api';

type WeatherParams = {
  token: string;
  latitude: number;
  longitude: number;
};

export const getTodayWeather = async ({
  token,
  latitude,
  longitude,
}: WeatherParams) => {
  const response = await fetch(
    `${API.GET_CURRENT_WEATHER}?lat=${latitude}&lon=${longitude}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const text = await response.text();

  let data;
  try {
    data = JSON.parse(text);
  } catch (err) {
    throw new Error('Invalid weather response');
  }

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch weather');
  }

  return data.data;
};