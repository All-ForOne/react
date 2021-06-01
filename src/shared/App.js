

import 'shared/App.scss';
import React, { Component, useState, useEffect } from 'react';
import { Home, About, Posts, SignIn, AuthResult, Profile, SignUp } from 'pages';
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

import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import CustomDrawer from 'components/CustomDrawer'
import CustomAppBar from 'components/CustomAppBar'

const App= () => {
  
  const drawerWidth = 240;
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));
  /* view 관련 변수 선언 시작 */
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    /* view 관련 변수 선언 끝 */


    const [user, setUser] = useState(null);
    const authenticated = user != null;
  
    const login = () => setUser(AuthenticationService.getLoggedInUserName());
    const logout = () => {
      setUser(null)
      AuthenticationService.logout()
    };

    useEffect(() => {
      if(open){
        handleDrawerOpen()
      }else{
        handleDrawerClose()
      }
    }, [open]);

    return (
      <div className={classes.root}>
      <CssBaseline />
      <CustomAppBar authenticated={authenticated} open={open} handleDrawer={handleDrawerOpen} logout={logout}/>
      <CustomDrawer open={open} handleDrawer={handleDrawerClose}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Route exact path="/" render={props => <Home {...props}/>}/>
            <Switch>
                <Route path="/about/:name" component={About}/>
                <Route path="/about" component={About}/>
            </Switch>
            <Route path="/posts" component={Posts}/>
            
            <Route
              path="/signIn"
              render={props => (
                <SignIn authenticated={authenticated} login={login} handleDrawer={handleDrawerClose} {...props} />
              )}
            />

            <Route path="/signUp" 
                  render={props => <SignUp login={login} handleDrawer={handleDrawerClose} {...props}/>}
            />
            <Route path="/authResult" component={AuthResult}/>
            <AuthRoute
              authenticated={authenticated}
              path="/profile"
              render={props => <Profile user={user} {...props} />}
            />
        </Container>
      </main>
    </div>
    );
};

export default App;