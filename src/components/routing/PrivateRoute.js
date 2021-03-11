import {useState} from 'react'
import {Route, Redirect} from 'react-router-dom' 

const PrivateRoute = ({component: Component, ...rest}) => {
    const {isAuthenticated} = rest
    return (
        <Route {...rest} render={props => (
            isAuthenticated ? <Component {...props} {...rest} /> : <Redirect to="/signin"/>
        )} />
    )
}

export default PrivateRoute
