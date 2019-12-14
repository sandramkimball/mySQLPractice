import React, {useState} from 'react';
// import Chart from './Chart';
// import GetData, {chartData} from './GetData';

function FilterBy(chartData) {
    console.log('chartData in FilterBy:', chartData)
    const {dropdownOpt, setDropdown} = useState({});
    const {filterOne, setFilterOne} = useState({});
    const {filterTwo, setFilterTwo} = useState({});
    const dropdownOptions = [
        'Trader Demographics', 
        'Trader Information Demand', 
        'Trader Business Behavior' 
    ]
    // const filterOptions = dropdownOpt.args;
    const filterOptions = [
        "Gender",
        "Education Level",
        "Border Crossing Frequency",
        "Age",
        "Country of Residence",
        "Primary Income",
        "Language",
        "Produce"
    ];

    // checkboxes set chartData filter options
    const handleClick = e => {
        if(filterOne === null){
            setFilterOne(e.target.value)
        } else {setFilterTwo(e.target.value)} 
    };

    // selects dropdown option
    const handleSelect = e => {
        e.preventDefault();
        setDropdown(e.target.value)
    };

    // submit filter form
    const handleSubmit = e => {
        var filteredData = [];
        filteredData.push(filterOne, filterTwo)
        return chartData.filter(item=> item.contain(filteredData))
    };
    
    return (
        <div className='chartAndFilter'>
            {/* <Chart 
                    keys={filterOptions}
                    props={data}
                    indexBy={indexBy}
                    data={chartData}
                /> */}
            <form className='FilterBy' name='filter_form' onSubmit={handleSubmit}>
                <h4>IndexBy:</h4>
                <select>
                    {dropdownOptions.map(obj=> (
                        <option value={obj} onSelect={handleSelect}>{obj}</option>
                    ))}
                </select>
                <p>Select Up to Two</p>
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




