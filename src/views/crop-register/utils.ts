import {API} from '../../api/api';

type CreateCropParams = {
  token: string;
  cropType: string;
  season: string;
  landAreaHectare: number;
  sowingDate: string;
  latitude: number;
  longitude: number;
  images: {uri: string}[];
};

export const createCrop = async ({
  token,
  cropType,
  season,
  landAreaHectare,
  sowingDate,
  latitude,
  longitude,
  images,
}: CreateCropParams) => {
  const formData = new FormData();

  formData.append('cropType', cropType);
  formData.append('season', season);
  formData.append('landAreaHectare', landAreaHectare.toString());
  formData.append('sowingDate', sowingDate);

  // Send GeoJSON properly
  formData.append(
    'location',
    JSON.stringify({
      type: 'Point',
      coordinates: [longitude, latitude],
    }),
  );

  // Append multiple images
  images.forEach((img, index) => {
    formData.append('images', {
      uri: img.uri,
      type: 'image/jpeg',
      name: `image_${index}.jpg`,
    } as any);
  });

  const response = await fetch(API.CREATE_CROP, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const text = await response.text();
  console.log('RAW RESPONSE:', text);

  let data;
  try {
    data = JSON.parse(text);
  } catch (err) {
    throw new Error('Server returned invalid JSON');
  }

  if (!response.ok) {
    throw new Error(data.message || 'Crop registration failed');
  }

  return data;
};
