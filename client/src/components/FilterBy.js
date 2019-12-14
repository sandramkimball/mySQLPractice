import React, {useState} from 'react';
import Chart from './Chart';

function FilterBy(chartData) {
    console.log('chartData in FilterBy:', chartData)
    const {dropdownOpt, setDropdown} = useState({});
    let checkboxFilters = [];
    const dropdownOptions = [
        'Trader Demographics', 
        'Trader Information Demand', 
        'Trader Business Behavior' 
    ]
    // const filterOptions = dropdownOpt.args;
    const filterOptions = [
        "Gender",
        "Education Level",
        "Country of Residence",
        "Language",
    ];

    // checkboxes set chartData filter options
    const handleClick = e => {
        checkboxFilters.push(e.target.value); 
        console.log('Box checked', checkboxFilters)
    };

    // selects dropdown option
    const handleSelect = e => {
        e.preventDefault();
        setDropdown(e.target.value)
    };

    // submit filter form
    const handleSubmit = e => {
        var filteredData = [];
        filteredData.push(checkboxFilters)
        return chartData.filter(item=> item.contain(filteredData))
    };
    
    return (
        <div className='chartAndFilter'>
            <Chart props={chartData}/>
            <form className='FilterBy' name='filter_form' onSubmit={handleSubmit}>
                <h4>IndexBy:</h4>
                <select>
                    {dropdownOptions.map(obj=> (
                        <option value={obj} onSelect={handleSelect}>{obj}</option>
                    ))}
                </select>
                <p>Select Up to Two Filters</p>
                {filterOptions.map(obj=> (
                    <div>
                    <input
                        type='checkbox'
                        name='check[]'
                        value={obj}
                        key={obj}
                        onClick={handleClick}
                    /> <label>{obj}</label>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default FilterBy;




