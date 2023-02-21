import { Route } from 'react-router-dom';
import Login from '../pages/Acconut/Login'
import React, { ReactNode } from 'react';

interface Props {
    children?: ReactNode
}

export const PrivateRoute = ({
  children,
  ...rest
}: Props): JSX.Element => {
  return <Route {...rest} render={() => (true ? children : <Login />)}></Route>;
};