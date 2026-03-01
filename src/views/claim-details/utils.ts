import {API} from '../../api/api';

export const getClaimDetails = async (token: string, claimId: string) => {
  const response = await fetch(`${API.GET_CLAIM_DETAILS}/${claimId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch claim details');
  }

  const data = await response.json();
  
  return data.data;
};
