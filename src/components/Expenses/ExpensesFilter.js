import React from 'react';
import './ExpensesFilter.css'
import { useState } from 'react';

const ExpensesFilter = (props) => {

    const [filteredYear, setFilteredYear] = useState('')
    console.log(filteredYear)

    const filterYearHandler = (event) => {
        setFilteredYear(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={filterYearHandler}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;