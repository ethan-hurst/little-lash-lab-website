import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Price, Contact, Faq, NotFound } from '../pages'; 

export default class _Router extends React.Component {
    render() { 
        return (
            <Router>
                <Switch>
                    <Route exact path="/" Component={Home} />
                    <Route exact path="/home" Component={Home} />
                    <Route exact path="/" Component={Price} />
                    <Route exact path="/" Component={Contact} />
                    <Route exact path="/" Component={Faq} />
                    <Route Component={NotFound} />
                </Switch>
            </Router>
        );
    }
}
