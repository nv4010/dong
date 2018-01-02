import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
    HashRouter  as Router,
    Route,
    Switch
} from 'react-router-dom'

import CommonError from './common/Error/'

import Bundle from './bundle.js';


const App = (props) => (
     <Bundle load={() => import('./App.js')}>
        {(App) => <App {...props}/>}
    </Bundle>
)


const Routes = () => (
    <Router>
        <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={3000}
        >
            <Switch>
                <Route exact  path="/" component={App} />
                <Route component={CommonError}/>
            </Switch>
        </ReactCSSTransitionGroup>
    </Router>
)

export default Routes;