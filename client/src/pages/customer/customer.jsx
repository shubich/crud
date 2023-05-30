import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useCustomer from '../../hooks/useCustomer';
import useAddresses from '../../hooks/useAddresses';
import AddAddress from '../../components/addAddress/addAddress';
import AddressesTable from '../../components/addressesTable/addressesTable';
import { io } from 'socket.io-client';

import styles from './customer.module.css';

const Customer = () => {
    const { customerId } = useParams();
    const {data, loading} = useCustomer(customerId);

    const {data: addresses, addAddressToList} = useAddresses(customerId);

    useEffect(() => {
        const socket = io(process.env.REACT_APP_BASE_URL);
        
        socket.on(customerId, (address) => {
            addAddressToList(address);
        });

        return () => {
            socket.close()
        }
    }, [addAddressToList, customerId])
    
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return  <div>No data</div>;
    }

    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.name}>{data.name}</h1>
                <Link className={styles.goBack} to="/">Go Back</Link>
            </div>
            
            <AddAddress customerId={customerId} />
            <AddressesTable data={addresses}/>
        </div>
    )
}

export default Customer;