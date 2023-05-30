import { useState, useEffect } from 'react';
import { getAddressesByCustomerId } from '../services/address.service';

const useAddresses = (customerId) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAddressesByCustomerId(customerId).then(res => {
            setData(res.data);
        }).catch((err) => {
            console.error(err);
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    return {
        data,
        loading,
    }
}

export default useAddresses;