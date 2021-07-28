import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';

import {Route} from "../imports/ui/Route";


Meteor.startup(() => {
    render(<Route/>, document.getElementById('main'));
});


