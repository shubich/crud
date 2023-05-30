import apiClient from "../apiClient/apiClient"

export const getCustomers = () => {
    return apiClient.get('/customers');
}

export const createCustomer = (data) => {
    return apiClient.post('/customer', data);
}

export const getCustomerById = (id) => {
    return apiClient.get(`/customer/${id}`);
}

export const editCustomerById = (data) => {
    return apiClient.put('/customer', data);
}

export const deleteCustomerById = (id) => {
    return apiClient.delete(`/customer/${id}`);
}

