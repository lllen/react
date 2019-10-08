import React from 'react';
import './App.css';
import Dashboard, {DashboardItem, DashboardRow} from './components/Dashboard'
import PieChart from "./plots/pieChart";
import {lineDataPoints, pieDataPoints} from "./components/Charts/data";
import LineChart from "./plots/lineChart";

class App extends React.Component {
    pieChartComponent = () => {
        return (<PieChart title="Custom title" dataPoints={pieDataPoints}/>)
    };

    lineChartComponent = () => {
        return (<LineChart title="Custom title" dataPoints={lineDataPoints}/>)
    };

    render() {

        return (
            <Dashboard>
                <DashboardRow grid="2-3">
                    <DashboardItem
                        title="test1"
                        component={this.pieChartComponent()}
                    />
                    <DashboardItem
                        title="test2"
                        component={this.lineChartComponent()}
                    />
                </DashboardRow>
            </Dashboard>
        );
    }
}

export default App;
