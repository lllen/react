import React from 'react';
import './App.css';
import Dashboard, {DashboardItem, DashboardRow} from './components/Dashboard'
import GridLayout, {GridLayoutRow} from './components/GridLayout'
import PieChart from "./plots/pieChart";
import {lineDataPoints, pieDataPoints} from "./components/Charts/data";
import LineChart from "./plots/lineChart";

class App extends React.Component {
    pieChartComponent = () => {
        return (<PieChart title="Pie chart" dataPoints={pieDataPoints}/>)
    };

    lineChartComponent = () => {
        return (<LineChart title="Line chart" dataPoints={lineDataPoints}/>)
    };

    render() {

        return (
            <GridLayout>
                <GridLayoutRow
                    grid="3-offset_1-5"
                    gapColumn={2}
                >
                    {this.pieChartComponent()}
                    {this.lineChartComponent()}
                </GridLayoutRow>
            </GridLayout>
        );
    }
}

export default App;
