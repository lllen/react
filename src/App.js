import React from 'react';
import './App.css';
import Dashboard, {DashboardItem, DashboardRow} from './components/Dashboard'
import GridLayout, {GridLayoutRow} from './components/GridLayout'
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
            <GridLayout>
                <GridLayoutRow
                    grid="4-offset_2-4"
                    gapColumn={2}
                >
                    {this.pieChartComponent()}
                    {this.pieChartComponent()}
                </GridLayoutRow>
            </GridLayout>
        );
    }
}

export default App;
