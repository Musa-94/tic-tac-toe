import React, { Suspense } from 'react';
import {
    Route,
    Switch,
    HashRouter as Router,
} from 'react-router-dom';
import LoginPage from '../loginPage';

const Routers = props => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={'/'} exact component={LoginPage}/>
                    {/*<Route path={'/sign-in'} component={SignInPage}/>*/}
                </Switch>
            </Suspense>
        </Router>
    );
};

export default React.memo(Routers)
