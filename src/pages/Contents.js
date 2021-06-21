import React, { useEffect } from 'react';
import { Home, Calendar, Posts, Profile, Repertoire } from 'pages';
import { Route, Switch, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
          overflow: 'auto',
          flexDirection: 'row',
          alignItems: 'stretch',
        },
        container: {
          paddingTop: theme.spacing(4),
          paddingBottom: theme.spacing(4),
        },
        nav: {
          width: '100%',
          paddingTop: theme.spacing(8),
          marginTop: theme.spacing(3),
          display: 'flex',
          overflow: 'auto',
          borderBottom: '1px solid gray',
          position: 'sticky',
          top: -theme.spacing(8),
          zIndex: 1,
          backgroundColor: '#e9ecef',
          //flexDirection: 'column',
        },
    }));
    
    /* view 관련 변수 선언 시작 */
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log(newValue);
      history.push(newValue);
    };

    const pathName = useLocation().pathname;

    //페이지 새로고침시 이전 탭 select 하기 위함
    useEffect(() => {
          setValue(pathName);
        }, [pathName]);

    return (
    <div>
        <Grid container className={classes.nav}>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
          <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
          >
              <Tab value="/" label="Overview" />
              <Tab value="/repertoire" label="Repertoire" />            
              <Tab value="/calendar" label="Calendar" />
              <Tab value="/posts" label="Posts" />
          </Tabs>
          </Grid>
        </Grid>

        <main className={classes.content}>
            <Grid container >
              <Grid item xs={4}>
                <Profile user={user} />
              </Grid>
              <Grid item xs={6}>
                <Container maxWidth="lg" className={classes.container}>              
                    <Switch>
                        <Route path="/calendar" component={Calendar}/>
                        <Route path="/posts" component={Posts}/>
                        <Route path="/repertoire" component={Repertoire}/>
                        <Route exact path="/" render={props => <Home {...props}/>}/>
                    </Switch>
                </Container>
              </Grid>
            </Grid>
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