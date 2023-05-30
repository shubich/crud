import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteCustomerById, editCustomerById } from '../../services/customer.service';

import styles from './customersTable.module.css';

const CustomersTable = ({data, loading, deleteCustomerFromList, editCustomerFromList}) => {
    const [editableId, setEditableId] = useState();
    const [inputValue, setInputValue] = useState();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data?.length) {
        return  <div>No data</div>;
    }

    const handleDelete = (event) => {
        const userId = event.target.parentElement.getAttribute('data-userId');
        deleteCustomerById(userId).then(() => {
            deleteCustomerFromList(userId)
        })
    }

    const handleEditClick = (event) => {
        const userId = event.target.parentElement.getAttribute('data-userId');
        const user = data.find(user => user._id === userId);
        setEditableId(userId);
        setInputValue(user.name);
    }

    const handleNameChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleEditSave = () => {
        editCustomerById({id: editableId, name: inputValue}).then(() => {
            editCustomerFromList(editableId, inputValue);
            handleCancel(null);
        });
    }

    const handleCancel = () => {
        setEditableId(null);
        setInputValue('');
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.th}>#</th>
                    <th className={styles.th}>Name</th>
                    <th className={styles.th}>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        return (
                            <tr key={item._id}>
                                <td className={styles.td}>{index+1}</td>
                                <td className={styles.td}>
                                {editableId === item._id 
                                    ? <>
                                        <input className={styles.input} type="text" value={inputValue} onChange={handleNameChange} /> 
                                        <button onClick={handleEditSave} className={styles.button}>Save</button>
                                        <button onClick={handleCancel} className={styles.button}>x</button>
                                    </>
                                    : item.name
                                }
                                </td>
                                <td className={styles.td} data-userId={item._id}>
                                    <Link to={`customer/${item._id}`} className={styles.action}>View</Link>, 
                                    <span onClick={handleEditClick} className={styles.action}>Edit</span>, 
                                    <span onClick={handleDelete} className={styles.action}>Delete</span></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default CustomersTable;