import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import AllocationForm from './components/AllocationForm';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import Budget from './components/Budget'; // Import the Budget component

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
            <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                <div className='col-sm'>
                        <Budget /> {/* Display Budget component beside CartValue */}
                    </div>
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    {/* <div className='col-sm'>
                        <CartValue />
                    </div> */}
                    
                    <div className='col-sm'>
                        <Location />
                    </div>
                </div>
                <h3 className='mt-3'>Shopping Cart</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change Allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
