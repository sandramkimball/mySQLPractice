import React, {useState, useEffect} from "react";
import {ResponsiveBar} from '@nivo/bar';
import theme from '../Constants/Theme.js';

function Chart({props}) {
    console.log(props.chartData)

    const [femaleUsers, setFemaleUsers] = useState({
        gender: 'Female',
        Female: 0,
    });
    const [maleUsers, setMaleUsers] = useState({
        gender: 'Male',
        Male: 0,
    });


    return(
        <div className = 'DataChart'>
            <h5>Testing Chart.js</h5>
            <div className="Chart">        
            <ResponsiveBar
                data={props.data}
                keys={'Male', 'Female'}
                indexBy={props.firstOpt}
                margin={{ top: 50, right: 130, bottom: 75, left: 80 }}
                padding={0.3}
                groupMode="stacked"
                // colors={{scheme: nivo}}
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
    </div>
    )
}

export default Chart;