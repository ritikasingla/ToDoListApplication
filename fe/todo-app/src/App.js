import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginComponent from './todo/LoginComponent.jsx'
import WelcomeComponent from './todo/WelcomeComponent.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
    <Router>
      <>
      <Route exact path="/" component={LoginComponent}/>
      <Route path="/login" component={LoginComponent}/>
      <Route path="/welcome/:nameuser" component={WelcomeComponent}/>
      </>
    </Router>
     </div>
  );
}




export default App;
