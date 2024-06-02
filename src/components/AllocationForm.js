import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, remaining,currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const handleCostChange = (event) => {
        // Check if the entered value is numeric
        const value = event.target.value;
        if (!isNaN(value) || value === '') {
            setCost(value);
        }
    };

    const submitEvent = () => {
        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        // Check if the entered cost exceeds the remaining budget
        if (expense.cost > remaining) {
            alert("The value cannot exceed remaining funds £" + remaining);
            return;
        }

        if (action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing">Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                    <span style={{paddingLeft:"20px", marginRight:"0px"}}> {currency}</span>
                    <input
                        required='required'
                        type='text' // Change type to 'text' to allow only numeric values
                        pattern="[0-9]*" // Set pattern to only accept numeric values
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '5px', size: 10 }}
                        onChange={handleCostChange} // Change the onChange handler to handle numeric validation
                    />

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
