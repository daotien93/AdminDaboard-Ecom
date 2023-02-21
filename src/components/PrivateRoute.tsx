import React from 'react';
import { Route, RouteProps } from 'react-router';
import { JsxEmit } from 'typescript';
import Login from '../pages/Acconut/Login';

export const PrivateRoute = ({
    children,
    ...rest
}: RouteProps): JSX.Element => {
    return (
        <Route {...rest} render={() => (false ? children : <Login />)}></Route>
    )
}

