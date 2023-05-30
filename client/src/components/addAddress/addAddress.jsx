import React, { useState } from 'react';
import { createAddress }  from '../../services/address.service';
import styles from './addAddress.module.css';

const AddAddress = ({ customerId, addAddressToList }) => {
    const [location, setLocation] = useState('');

    const handleChange = (e) => {
        setLocation(e.target.value)
    }

    const handleAddAddress = () => {
        createAddress({ location, customerId }).then((res) => {
            // addAddressToList(res.data);
        });
    };

    return (    
        <div className={styles.container}>
            <input className={styles.input} onChange={handleChange} type="text" placeholder='Address' />
            <button className={styles.button} onClick={handleAddAddress}>Add Address</button>
        </div>
    )
}

export default AddAddress;