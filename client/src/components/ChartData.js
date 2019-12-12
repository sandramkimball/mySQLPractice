import React, {Fragment} from "react";
import axios from 'axios';
import Queries from './Queries';

class ChartData extends React.Component {
    constructor(props){
        super(props);
        this.state={
            users: [],
            traders: [],
            args: [],
            totalCount: 0,
            data: [],
            color: "nivo",
        }
    };


    componentDidMount(){
        this.props.getDropDownDefault(this.props.pathname);

        axios
        .get(`${process.env.REACT_APP_BACKEND_URL}`)
        .then(res=> {
            console.log('Response returned!');
            // res.traders.map(age=>)
        })
    };

    render(){
        return(
        <div className="Chart">           
            <div>
                <Fragment>
                    <h2>Launching from Chart.js Fragment</h2>
                    <Query query={TRADERS_QUERY}>
                        {({loading, error, data}) => {
                                if(loading) return <h2>Loading...</h2>
                                if(error) console.log(error)
                                console.log(data)
                                return <h1>Test 2: Chart.js</h1>
                        }}
                    </Query>
                </Fragment>
            </div>
        </div>
        )
    }
}
export default ChartData;