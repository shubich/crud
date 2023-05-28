import React from 'react';
import useCustomers from '../../hooks/useCustomers';
import CustomersTable from '../../components/customersTable';
import AddCustomer from '../../components/addCustomer';
import styles from './home.module.css';

const Home = () => {
    const { data, loading } = useCustomers();

    return (
        <div>
            <h1 className={styles.header}>Customers</h1>
            <AddCustomer />
            <CustomersTable data={data} loading={loading}/>
        </div>

    )
}

export default Home;