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
        "Most Requested Commodities",
        "Most Requested Commodity Categories",
        "Requested Procedures for Destination",
        "Most Requested Document Info for Procedures",
        "Most Requested Agency Info for Procedures",
        "Origin of Traders' Goods",
        "Final Destination Country",
        "Final Destination Market",
        "Top Commodity",
        "Top Commodity Categories",
        "Exchange Rate Direction"
    ];

    // function checkboxlimit(checkgroup){
    //     var checkgroup=checkgroup;
    //     for (var i=0; i<checkgroup.length; i++){
    //         checkgroup[i].onclick=function(){
    //         var checkedcount=0
    //         for (var i=0; i<checkgroup.length; i++)
    //             checkedcount+=(checkgroup[i].checked)? 1 : 0
    //         if (checkedcount>3){
    //             this.checked=false
    //             }
    //         }
    //     }
    // }

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
        <div className='FilterBy'>
            <form onSubmit={handleSubmit}>
                <p>Select Up to Three Options</p>
                {filterOptions.map(obj=> (
                    <div>
                    <input
                        type='checkbox'
                        name={obj}
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




