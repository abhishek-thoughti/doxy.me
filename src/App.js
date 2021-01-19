import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Patient from './Patient';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={Patient} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;