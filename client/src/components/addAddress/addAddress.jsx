import React, { useState } from 'react';
import { createAddress } from '../../services/address.service';
import styles from './addAddress.module.css';

const AddAddress = ({ customerId }) => {
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setLocation(e.target.value);
    };

    const handleAddAddress = () => {
        setLoading(true);
        createAddress({ location, customerId })
            .then(() => {
                setLocation('');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                onChange={handleChange}
                type="text"
                placeholder="Address"
                disabled={loading}
                value={location}
            />
            <button className={styles.button} onClick={handleAddAddress} disabled={loading || !location}>
                Add Address
            </button>
        </div>
    );
};

export default AddAddress;
