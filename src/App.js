/* eslint-disable import/first */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import PieChart from './plots/Pie Chart';

class App extends React.Component {
    render() {
      return (
          <PieChart />
    );
  }
}

export default App;
