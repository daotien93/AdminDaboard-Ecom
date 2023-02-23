import { Redirect, Route } from 'react-router-dom';
import Login from '../pages/Acconut/Login'
import React, { ReactNode } from 'react';
import { AccountState } from '../store/account/types';
import { useSelector } from 'react-redux';
import { AppState } from '../store';

interface Props {
  children?: ReactNode
}

export const AcconutRoute = ({
  children,
  ...rest
}: Props): JSX.Element => {
  const account: AccountState = useSelector((state: AppState) => state.account)
  return <Route
    {...rest}
    render={() =>
    (account.token ?
      <Redirect to={{ pathname: '/admin/home' }} /> : <Login />)}
  ></Route>;
};