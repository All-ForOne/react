import React, { Component, useState, useEffect } from 'react';
import { Home, Calendar, Posts, Profile, Repertoire } from 'pages';
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
import Link from '@material-ui/core/Link';
import CustomDrawer from 'components/CustomDrawer'
import CustomAppBar from 'components/CustomAppBar'

const Contents = ({ user, match, location, history }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexDirection: 'column',
        },
        toolbar: {
          paddingRight: 24, // keep right padding when drawer closed
        },
        content: {
          display: 'flex',
          height: '100vh',
          overflow: 'auto',
          flexDirection: 'row',
          alignItems: 'stretch',
        },
        container: {
          paddingTop: theme.spacing(4),
          paddingBottom: theme.spacing(4),
          flexGrow: '2',
          width: '60%',
        },
        nav: {
          width: '100%',
          paddingTop: theme.spacing(8),
          marginTop: theme.spacing(3),
          paddingLeft: '30%',
          display: 'flex',
          overflow: 'auto',
          borderBottom: '1px solid gray'
          //flexDirection: 'column',
        },
    }));
    
    /* view 관련 변수 선언 시작 */
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log(newValue);
      console.log(location);
      console.log(history);
      history.push(newValue);
    };

    return (
    <div>
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            className={classes.nav}
        >
            <Tab value="/" label="Overview" />
            <Tab value="/calendar" label="Calendar" />
            <Tab value="/posts" label="Posts" />
            <Tab value="/repertoire" label="Repertoire" />
            
        </Tabs>

        <main className={classes.content}>
            <Profile user={user} />
            <Container maxWidth="lg" className={classes.container}>              
                <Switch>
                    <Route path="/calendar" component={Calendar}/>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/repertoire" component={Repertoire}/>
                    <Route exact path="/" render={props => <Home {...props}/>}/>
                </Switch>
            </Container>
        </main>
    </div>

    );
};

export default Contents;

/**
 * 
 * <AuthRoute
                authenticated={authenticated}
                path="/profile"
                render={props => <Profile user={user} {...props} />}
                />

 */