import React from 'react';
import './App.css';

import Dashboard, { DashboardItems } from './components/Dashboard'
import PieChart from "./plots/pieChart";
import { lineDataPoints, pieDataPoints } from "./components/Charts/data";
import LineChart from "./plots/lineChart";

class App extends React.Component {
  pieChartComponent = () => {
    return ( <PieChart title="Custom title" dataPoints={pieDataPoints} />)
  };

    lineChartComponent = () => {
        return ( <LineChart title="Custom title" dataPoints={lineDataPoints} />)
    };

    render() {

      return (
          <>
              <Dashboard>
                <DashboardItems
                    title="test1"
                    component={this.pieChartComponent()}
                />
                <DashboardItems
                    title="test2"
                    component={this.lineChartComponent()}
                />
              </Dashboard>
          </>
    );
  }
}

export default App;
