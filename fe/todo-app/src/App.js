import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent from './todo/LoginComponent.jsx'
import WelcomeComponent from './todo/WelcomeComponent.jsx'
import TodosComponent from './todo/TodosComponent.jsx'
import ErrorComponent from './todo/ErrorComponent.jsx'
import HeaderComponent from './todo/HeaderComponent.jsx'
import LogoutComponent from './todo/LogoutComponent.jsx'
import FooterComponent from './todo/FooterComponent.jsx'
import AuthenticatedRoute from './todo/AuthenticatedRoute.jsx'
import './App.css'
import './bootstrap.css'
function App() {
  return (
    <div className="App">
    <Router>
      <>
      <HeaderComponent/>
      <Switch>
        <Route exact path="/" component={LoginComponent}/>
        <Route path="/login" component={LoginComponent}/>
        <AuthenticatedRoute path="/welcome/:nameuser" component={WelcomeComponent}/>
        <AuthenticatedRoute path="/todos" component={TodosComponent}/>
        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
        <Route component={ErrorComponent}/>
      </Switch>
      <FooterComponent/>
      </>
    </Router>
     </div>
  );
}




export default App;
