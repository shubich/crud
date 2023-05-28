import React from 'react';
import styles from './customersTable.module.css';

const CustomersTable = ({data, loading}) => {
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data?.length) {
        return  <div>No data</div>;
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
                                <td className={styles.td}>{index}</td>
                                <td className={styles.td}>{item.name}</td>
                                <td className={styles.td}>view, edit, delete</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default CustomersTable;