/* eslint-disable prettier/prettier */
import {API} from '../../api/api';

type RaiseClaimParams = {
  token: string;
  cropId: string;
  description: string;
  damageType: string;
  damageDate: string;
  latitude: number;
  longitude: number;
  images: {uri: string}[];
};

export const raiseClaim = async ({
  token,
  cropId,
  description,
  damageType,
  damageDate,
  latitude,
  longitude,
  images,
}: RaiseClaimParams) => {
  const formData = new FormData();

  formData.append('cropId', cropId);
  formData.append('description', description);
  formData.append('damageType', damageType);
  formData.append('damageDate', damageDate);

  formData.append(
    'location',
    JSON.stringify({
      type: 'Point',
      coordinates: [longitude, latitude],
    }),
  );

  images.forEach((img, index) => {
    formData.append('images', {
      uri: img.uri,
      type: 'image/jpeg',
      name: `damage_${index}.jpg`,
    } as any);
  });

  const response = await fetch(API.RAISE_CLAIM, {
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
    throw new Error(data.message || 'Claim submission failed');
  }

  return data;
};
