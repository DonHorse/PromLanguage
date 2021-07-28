import React from "react";
import {
    Router, Route, Switch, IndexRoute, BrowserHistory
} from 'react-router';
import {Meteor} from "meteor/meteor";
import {render} from "react-dom";



export const Routes = () => {

    <div className="Route">
        <Router history={browserHistory}>
            <Switch>

                <Route path="/" exact component={Accueil}/>
                <Route path="/Login" component={login}/>
                <Route path="/Register" component={Register}/>
                <Route path="/FormChoice" component={FormChoice}/>
                <Route path="/Logout" component={logout}/>
                <Route path="/" component={() => <div>ERREUR 404</div>} />

            </Switch>
        </Router>
    </div>
};





