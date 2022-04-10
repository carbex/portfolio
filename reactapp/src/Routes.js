import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/MainView/Home/Home'
import About from './components/MainView/About/About'
import Portfolio from './components/MainView/Portfolio/Portfolio'
import Contact from './components/MainView/Contact/Contact'
import Destinations from './components/MainView/Destinations/Destinations'
import Country from './components/MainView/Destinations/Country/Country'
import Login from './components/MainView/Login/Login'
import Dashboard from './components/MainView/Dashboard/Dashboard'
import NoPage from './components/MainView/NoPage/NoPage'


const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/destinations' component={Destinations} />
            <Route exact path='/destinations/:country' component={Country} />
            {/* <Route path='/linkedin' component={() => { 
                window.location.href = 'https://www.linkedin.com/in/alex-duchemin/'; 
                return null;
            }}/> */}
            <Route path="*" component={NoPage}></Route>
        </Switch>       
    )
}

export default Routes

