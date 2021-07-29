import React from "react";
import {
    Router, Route, Switch, IndexRoute, BrowserHistory
} from 'react-router';

import {Accueil} from "./Accueil";
import {Navbar} from "./Navbar";
import {LoginForm} from "./LoginForm";


export const Routes = () => {
    return(

        <div className="Route">
            <Router history={browserHistory}>
                <Navbar />
                <Switch>

                    <Route path="/" exact component={Accueil}/>
                    <Route path="/Login" component={LoginForm}/>
                    <Route path="/Register" component={Register}/>
                    <Route path="/FormChoice" component={FormChoice}/>
                    <Route path="/Logout" component={logout}/>
                    <Route path="/" component={() => <div>ERREUR 404</div>} />

                </Switch>
            </Router>
        </div>

    );
};





