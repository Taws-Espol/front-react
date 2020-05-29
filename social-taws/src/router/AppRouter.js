import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Profile from '../views/Profile/Profile';

const AppRouter = () =>{
  return(
    <Router>
      <Switch>
        <Route path="/profile" component={Profile}/>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  )
}
export default AppRouter;