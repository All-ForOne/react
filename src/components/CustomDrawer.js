import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import LogoutButton from 'components/LogoutButton'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { mainListItems, secondaryListItems } from 'components/Menu';
import { useHistory } from "react-router-dom";

const CustomDrawer = ({open, handleDrawer}) => {

    const drawerWidth = 240;
    const useStyles = makeStyles((theme) => ({
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
          },
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
          drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
              width: theme.spacing(9),
            },
          },
    }));

    const history  = useHistory();
    const classes = useStyles();

    const menuList = [
        {
            text : "Home",
            icon : <DashboardIcon />,
            onClick : () => history.push("/")
            
        },
        {
            text : "Profile",
            icon : <DashboardIcon />,
            onClick : () => history.push("/profile")
        },
    ];

    return (
        <div>
            <Drawer
                variant="permanent"
                classes={{
                  paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
                </div>
                <Divider />
                <List>
                    {menuList.map((item, index) => {
                        const {text, icon, onClick} = item;
                        return (<ListItem button key={text} onClick={onClick}>
                          {icon && <ListItemIcon> {icon} </ListItemIcon>}
                        <ListItemText primary={text} />
                      </ListItem> );
                    })}
                </List>
            </Drawer>
        </div>

    );
};

export default CustomDrawer;


/**
            <Drawer
                variant="permanent"
                classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
*/