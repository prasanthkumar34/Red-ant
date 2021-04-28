import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';

 class App extends React.Component{

   render(){
    return(
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    );  
    }
 }

export default App;