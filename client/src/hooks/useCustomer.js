import { useState, useEffect } from 'react';
import { getCustomerById } from '../services/customer.service';

const useCustomer = (id) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCustomerById(id).then(res => {
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

export default useCustomer;