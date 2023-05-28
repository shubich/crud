import React, { useState } from 'react';
import { createCustomer }  from '../../services/customer.service';
import styles from './addCustomer.module.css';

const AddCustomer = () => {
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleAddCustomer = () => {
        createCustomer({ name });
    };

    return (    
        <div className={styles.container}>
            <input className={styles.input} onChange={handleNameChange} type="text" placeholder='Name' />
            <button className={styles.button} onClick={handleAddCustomer}>Add Customer</button>
        </div>
    )
}

export default AddCustomer;