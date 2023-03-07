import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentLoginUser } from '../../store/account/actions';
import { LeftMenu } from './LeftMenu/LeftMenu';
import { TopBar } from './Topbar/Topbar';
import { Switch, Route } from 'react-router';

import { Users } from './Users/Users';
import Home from '../Home/Home';

const Admin = () => {
  const dispatch:any = useDispatch();
  useEffect(() => {
    dispatch(getCurrentLoginUser());
  }, [dispatch]);
  
  return (
    <Fragment>
      <LeftMenu />
      <div id='content-wrapper' className='d-flex flex-column'>
        <div id='content'>
          <TopBar />
          <div className='container-fluid'>
           <Switch>
              <Route path='/users'>
                <Users />
              </Route>
              <Route path='/home'>
                <Home />
              </Route>
           </Switch>
          </div>
        </div>
        <footer className='sticky-footer bg-white'>
          <div className='container my-auto'>
            <div className='copyright text-center my-auto'>
              <span>Copyright © Your Website 2021</span>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  )
}

export default Admin