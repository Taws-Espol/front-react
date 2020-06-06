import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Profile from '../views/Profile/Profile';
import Login from '../views/Login/Login';
import Register from '../views/Register/Register';

const AppRouter = () =>{
  return(
    <Router>
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/" component={Profile}/>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  )
}
export default AppRouter;