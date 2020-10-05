import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import AdminDashboard from './Pages/AdminDashboard';
import Authenticated from './Components/Authenticated';


function App() {
  return (    
    <Switch>
    <Route exact path='/' >
      <Authenticated nonAuthenticated={true}>
        <Redirect to='/login' />
      </Authenticated>      
    </Route>
    <Route exact path='/AdminDashboard'>
       <Authenticated>
         <AdminDashboard/>
       </Authenticated>
      </Route>
      <Route exact path='/Dashboard'>
       <Authenticated>
         <Dashboard/>
       </Authenticated>
      </Route>      
      <Route exact path='/login' >
        <Authenticated nonAuthenticated={true}>
         <Login/>
        </Authenticated>
       </Route>
      <Route exact path='*' render={() => "404 Not Found!"} />
    </Switch>    
  );
}

export default App;
