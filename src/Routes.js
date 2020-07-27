import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))
const Game = React.lazy(() => import('./pages/Game'))
const Rank = React.lazy(() => import('./pages/Rank'))

const Routes = () => (
    <Suspense fallback="Loading...">
        <Switch>
            <Route exact path='/' component={routerProps => <Home {...routerProps} />} />
            <Route exact path='/game' component={routerProps => <Game {...routerProps} />} />
            <Route exact path='/rank' component={routerProps => <Rank {...routerProps} />} />
        </Switch>
    </Suspense>
)

export default Routes