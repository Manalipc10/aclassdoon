import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Cards } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/">
        <Header/>
        <Cards />
      </Route>
    </Router>
    </div>
  );
}

export default App;

