import React, {useState, useEffect} from 'react';
import Chart from './Chart';

function FilterBy(props) {
    const [chartData, setChartData] = useState([]);
    const {firstOpt, setFirstOpt} = useState({});
    const {secondOpt, setSecondOpt} = useState({});
    const {thirdOpt, setThirdOpt} = useState({});

    const filterOptions = [
        "Gender",
        "Education Level",
        "Border Crossing Frequency",
        "Age",
        "Country of Residence",
        "Primary Income",
        "Language",
        "Produce",
        "Most Requested Procedures Commodities",
        "Most Requested Procedure Commodity Categories",
        "Requested Procedures for Destination (Imports to:)",
        "Most Requested Document Information for Procedures",
        "Most Requested Agency Information for Procedures",
        "Origin of Traders' Goods",
        "Final Destination Country",
        "Final Destination Market",
        "Top Commodity",
        "Top Commodity Categories",
        "Exchange Rate Direction"
    ];

    const handleClick = e => {
        if(firstOpt === null){
            setFirstOpt(e.target.value)
        } else if (secondOpt === null){
            setSecondOpt(e.target.value)
        } else if (thirdOpt === null){
            setThirdOpt(e.target.value)
        }
    };

    const handleSubmit = e => {
        var filterOptions = [];
        filterOptions.push(firstOpt, secondOpt, thirdOpt)
        setChartData(filterOptions)
    };
            // <button onClick={(e)=> !variables.hasOwnProperty('age') ? setVariables({age: '20-30'}) : setVariables({})}>change age state</button>

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Select Up to Three Options</p>
                {filterOptions.map(obj=> (
                    <input
                        type='radio'
                        name={obj}
                        value={obj}
                        onClick={handleClick}
                    />
                ))}
            </form>
        </div>
    )
}

export default FilterBy;



