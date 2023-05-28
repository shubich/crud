import apiClient from "../apiClient/apiClient"

export const getCustomers = () => {
    return apiClient.get('/customers');
}

export const createCustomerById = (data) => {
    return apiClient.post('/customer', data);
}

export const getCustomerById = (id) => {
    return apiClient.get(`/customer/${id}`);
}

export const editCustomerById = (id, data) => {
    return apiClient.put(`/customer/${id}`, data);
}

export const deleteCustomerById = (id) => {
    return apiClient.delete(`/customer/${id}`);
}

