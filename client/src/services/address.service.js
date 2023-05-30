import apiClient from "../apiClient/apiClient"

export const getAddressesByCustomerId = (customerId) => {
    return apiClient.get(`/address/${customerId}`);
}

export const createAddress = (data) => {
    return apiClient.post('/address', data);
}
