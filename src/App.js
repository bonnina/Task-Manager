import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddTask from './components/AddTask';
import Login from './components/LogIn';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div> 
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' render={(props) => <HomePage {...props} />} />
            <Route exact path="/add" render={(props) => <AddTask {...props} />} />
            <Route exact path="/log" render={(props) => <Login {...props} />} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
