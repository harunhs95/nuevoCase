import React, { Component } from 'react';
import { MainContent } from './assets/styled';
import Dashboard from './pages/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MainContent>
        <Dashboard />
      </MainContent>
    );
  }
}

export default App;
