import React, {Fragment} from "react";
import {ResponsiveBar} from '@nivo/bar';
import axios from 'axios';
import theme from '../Constants/Theme.js';
import Queries from './Queries';

function Chart({tradersUsers: {age, gender, education, crossing_frequency, primary_income}}) {

    return(
        <div>
            <h5>Testing Chart.js (maybe switch this with CartData.js?)</h5>
            <div>
                <p>Trader: </p>
                <p>{age}</p>
                <p>{gender}</p>
                <p>{education}</p>
            </div>
        </div>
    )


    // componentDidMount(){
    //     this.props.getDropDownDefault(this.props.pathname);

    //     axios
    //     .get(`${process.env.REACT_APP_BACKEND_URL}`)
    //     .then(res=> {
    //         console.log('Response returned!');
    //         // res.traders.map(age=>)
    //     })
    // };

    return(
        <div className="Chart">           
            <h2>{this.props.arg}</h2>
            <ResponsiveBar
                data={this.state.data}
                keys={this.state.keys}
                indexBy={`${this.state.args}`}
                margin={{ top: 50, right: 130, bottom: 75, left: 80 }}
                padding={0.3}
                groupMode="stacked"
                colors={{ scheme: this.state.color }}
                labelSkipHeight={0}
                labelSkipWidth={0}
                labelFormat={d => <tspan y={-15}>{d}% </tspan>}
                labelForm={d => <text>{d} % </text>}
                borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                maxValue={100}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Age",
                    legendPosition: "middle",
                    legendOffset: 65
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Percentage of Traders",
                    legendPosition: "middle",
                    legendOffset: -70
                }}
                labelTextColor="black"
                theme={theme}
                tooltip={({ id, value}) => (
                    <strong style={{color: "#000000", fontSize: "15px", fontFamily: "Helvetica"}}>
                        {id}: {value}%
                    </strong>
                )}

                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [{
                                on: 'hover',
                                style: {itemOpacity: 1}
                            }]
                    }
                ]}
                
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    )
    
}
export default Chart;