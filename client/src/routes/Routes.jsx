import HomePage from '../pages/HomePage/HomePage'
import { Switch, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route component={ErrorPage} />
        </Switch>
    )
}

export default Routes
