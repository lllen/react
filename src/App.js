import React from 'react';
import './App.css';

import Charts from './components/Charts'
import Dashboard, { DashboardItems } from './components/Dashboard'
import PieChart from "./plots/pieChart";
import {pieDataPoints} from "./components/Charts/data";

class App extends React.Component {
  testComponent = () => {
    return ( <PieChart title="Custom title" dataPoints={pieDataPoints} />)
  };

    render() {

      return (
          <>
              {/*<Charts />*/}
              <Dashboard>
                <DashboardItems
                    title="test1"
                    component={this.testComponent()}
                />
                <DashboardItems
                    title="test2"
                    component={this.testComponent()}
                />
              </Dashboard>
          </>
    );
  }
}

export default App;
