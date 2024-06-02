import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const { dispatch, currency } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    };

    return (
        <div className='location-container'>
            <label htmlFor="currency" style={{ marginRight: '1rem' }}>Currency:</label>
            <select
                id="currency"
                onChange={(event) => changeCurrency(event.target.value)}
                style={{
                    padding: '8px',
                    fontSize: '16px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    backgroundColor: '#e8f5e9', // Light green background color
                    cursor: 'pointer',
                }}
                value={currency}
            >
                <option value="£">Pound (£)</option>
                <option value="$">Dollar ($)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
        </div>
    );
};

export default Location;
