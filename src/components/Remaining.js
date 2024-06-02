import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget,currency } = useContext(AppContext);

    // Calculate total expenses by summing up the cost of each item
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    // Determine the alert type based on whether remaining budget is positive or negative
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    // Calculate the remaining budget by subtracting total expenses from budget
    const remainingBudget = budget - totalExpenses;

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{remainingBudget}</span>
        </div>
    );
};

export default Remaining;
