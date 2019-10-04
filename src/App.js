/* eslint-disable import/first */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import PieChart from './plots/pieChart';
import LineChart from './plots/lineChart';

class App extends React.Component {
    render() {
      let dataPoints = [
        { y: 18, label: "Direct" },
        { y: 49, label: "Organic Search" },
        { y: 9, label: "Paid Search" },
        { y: 5, label: "Referral" },
        { y: 19, label: "Social" }
      ]
      return (
          <PieChart title="Custom title" dataPoints={dataPoints} />
    );
  }
}

export default App;
