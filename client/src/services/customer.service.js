import apiClient from '../apiClient/apiClient';

export const getCustomers = () => apiClient.get('/customers');

export const createCustomer = (data) => apiClient.post('/customer', data);

export const getCustomerById = (id) => apiClient.get(`/customer/${id}`);

export const editCustomerById = (data) => apiClient.put('/customer', data);

export const deleteCustomerById = (id) => apiClient.delete(`/customer/${id}`);
