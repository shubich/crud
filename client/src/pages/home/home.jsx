import React from 'react';
import useCustomers from '../../hooks/useCustomers';
import CustomersTable from '../../components/customersTable/customersTable';
import styles from './home.module.css';

const Home = () => {
    const { data, loading } = useCustomers();

    return (
        <div>
            <h1 className={styles.header}>Customers</h1>
            <CustomersTable data={data} loading={loading}/>
        </div>

    )
}

export default Home;