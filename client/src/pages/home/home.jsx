import React from 'react';
import useCustomers from '../../hooks/useCustomers';
import CustomersTable from '../../components/customersTable';
import AddCustomer from '../../components/addCustomer';
import styles from './home.module.css';

const Home = () => {
    const { data, loading, addCustomerToList, deleteCustomerFromList, editCustomerFromList } = useCustomers();

    return (
        <div>
            <h1 className={styles.header}>Customers</h1>
            <AddCustomer addCustomerToList={addCustomerToList} />
            <CustomersTable 
                data={data} 
                loading={loading} 
                deleteCustomerFromList={deleteCustomerFromList} 
                editCustomerFromList={editCustomerFromList}    
            />
        </div>

    )
}

export default Home;