

import 'shared/App.scss';
import React, { Component, useState, useEffect } from 'react';
import { Home, Calendar, Posts, SignIn, AuthResult, Profile, SignUp, Contents } from 'pages';
import { Route, Switch } from 'react-router-dom';
import Head from '../components/Head';
import ItemList from '../components/ItemList';
import ItemCreate from '../components/ItemCreate';
import { ItemProvider } from '../ItemContext';
import axios from 'axios';
import AuthRoute from 'components/AuthRoute'
import AuthenticationService from 'lib/AuthenticationService';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import { useHistory } from "react-router-dom";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import CustomDrawer from 'components/CustomDrawer'
import CustomAppBar from 'components/CustomAppBar'
import users from 'redux/modules/users';

const App= () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  }));

  /* view 관련 변수 선언 시작 */
    const classes = useStyles();
    /* view 관련 변수 선언 끝 */

    const [user, setUser] = useState(null);
    const authenticated = user != null;
      
    const login = () => setUser(AuthenticationService.getLoggedInUserName());
    const logout = () => {
      setUser(null)
      AuthenticationService.logout()
    };

    return (
      <div className={classes.root}>
        <CssBaseline />
        <CustomAppBar authenticated={authenticated} logout={logout}/>
        <Switch>
          <Route
            path="/signIn"
            render={props => (
              <SignIn authenticated={authenticated} login={login}  {...props} />
            )}
          />
          <Route path="/signUp" 
                render={props => <SignUp login={login} {...props}/>}
          />
          <Route path="/" render={props => <Contents user={user} {...props}/>}/>
        </Switch>
      </div>
    );
};

export default App;