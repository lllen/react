import React from 'react';
import logo from './logo.svg';
import jQuery from 'jquery';
import flot from 'flot';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Flot />
      </div>
    </div>
  );
}

class Flot extends React.Component {
  constructor(props) {
    super(props);
    this.placeholder = 'Test';
    this.options = {
      series: {
          lines: { show: true },
          points: { show: true }
      }
  };
  };

  componentDidMount () {
    jQuery.plot(jQuery("#fplot"), [[0, 5], [1, 10], [2, 15], [3, 20]]);
  };

  render () {
    return <div id="#fplot"></div>;
  }
}

export default App;
