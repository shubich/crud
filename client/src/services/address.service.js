import apiClient from '../apiClient/apiClient';

export const getAddressesByCustomerId = (customerId) => apiClient.get(`/address/${customerId}`);

export const createAddress = (data) => apiClient.post('/address', data);
