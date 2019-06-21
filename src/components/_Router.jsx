import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Lash, Brows, Contact, Faq, NotFound } from '../pages'; 

export default class _Router extends React.Component {
    render() { 
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/lashes" component={Lash} />
                    <Route exact path="/brows" component={Brows} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/faq" component={Faq} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}
