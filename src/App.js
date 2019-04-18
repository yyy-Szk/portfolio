import React from 'react';
import Index from './components/index'
import './stylesheet/app.css';

class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Index />
      </div>
    );
  }
}

export default App;
