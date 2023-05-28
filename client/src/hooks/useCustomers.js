import { useState, useEffect } from 'react';
import { getCustomers } from '../services/customer.service';

const useCustomers = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCustomers().then(res => {
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

export default useCustomers;