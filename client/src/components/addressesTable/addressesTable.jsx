import React from 'react';

import styles from './addressesTable.module.css';

const AddressesTable = ({ data, loading }) => {
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data?.length) {
        return <div>No data</div>;
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.th}>#</th>
                    <th className={styles.th}>Location</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item._id}>
                        <td className={styles.td}>{index + 1}</td>
                        <td className={styles.td}>{item.location}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AddressesTable;
