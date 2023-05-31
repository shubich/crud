import { useState, useEffect, useCallback } from 'react';
import { getAddressesByCustomerId } from '../services/address.service';

const useAddresses = (customerId) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAddressesByCustomerId(customerId)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const addAddressToList = useCallback(
        (address) => {
            setData([...data, address]);
        },
        [data]
    );

    return {
        data,
        loading,
        addAddressToList,
    };
};

export default useAddresses;
