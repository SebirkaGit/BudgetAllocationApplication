import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value);
        // Ensure the new budget is not lower than the total spending
        if (value < totalExpenses) {
            alert("The budget cannot be lower than the total spending.");
            return;
        }
        // Set maximum limit for the budget
        if (value > 20000) {
            alert("The maximum budget limit is £20,000.");
            return;
        }
        setNewBudget(value);
    };

    const increaseBudget = () => {
        const increasedBudget = newBudget + 10;
        if (increasedBudget <= 20000) {
            setNewBudget(increasedBudget);
        } else {
            alert("The maximum budget limit is £20,000.");
        }
    };

    const decreaseBudget = () => {
        const decreasedBudget = newBudget - 10;
        if (decreasedBudget >= totalExpenses) {
            setNewBudget(decreasedBudget);
        } else {
            alert("The budget cannot be lower than the total spending.");
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;
