import { useState, useEffect, useCallback } from 'react';
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

    const addCustomerToList = useCallback((customer) => {
        setData([...data, customer]);
    }, [data]);

    const deleteCustomerFromList = useCallback((id) => {
        setData(data.filter(item => item._id !== id))
    }, [data]);

    const editCustomerFromList = useCallback((id, name) => {
        setData(data.map(item => {
            if (item._id === id) {
                return {...item, name};
            }
            return item;
        }))
    }, [data]);

    return {
        data,
        loading,
        addCustomerToList,
        deleteCustomerFromList,
        editCustomerFromList,
    }
}

export default useCustomers;