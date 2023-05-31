import React, { useState } from 'react';
import { createCustomer } from '../../services/customer.service';
import styles from './addCustomer.module.css';

const AddCustomer = ({ addCustomerToList }) => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddCustomer = () => {
        setLoading(true);
        createCustomer({ name })
            .then((res) => {
                addCustomerToList(res.data);
                setName('');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                onChange={handleNameChange}
                type="text"
                placeholder="Name"
                value={name}
                disabled={loading}
            />
            <button className={styles.button} onClick={handleAddCustomer} disabled={loading || !name}>
                Add Customer
            </button>
        </div>
    );
};

export default AddCustomer;
