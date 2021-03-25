import React, { Suspense } from 'react';
import {
    Route,
    Switch,
    HashRouter as Router,
} from 'react-router-dom';
import LoginPage from '../loginPage';
import TicTacToe from '../ticTacToe';

const Routers = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={'/'} exact component={LoginPage}/>
                    <Route path={'/tic-tac-toe'} exact component={TicTacToe}/>
                    {/*<Route path={'/sign-in'} component={SignInPage}/>*/}
                </Switch>
            </Suspense>
        </Router>
    );
};

export default React.memo(Routers)
