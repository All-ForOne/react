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

const CustomDrawer = () => {

    const useStyles = makeStyles((theme) => ({
        drawerPaper: {
            width: '100%',
            paddingTop: '64px',
          },
    }));

    const history  = useHistory();
    const classes = useStyles();


    
    const menuList = [
        {
            text : "Dashboard",
            icon : <DashboardIcon />,
            onClick : () => history.push("/")
            
        },
        {
            text : "Profile",
            icon : <DashboardIcon />,
            onClick : () => history.push("/profile")
        },
        {
          text : "Calendar",
          icon : <DashboardIcon />,
          onClick : () => history.push("/calendar")
      },
    ];

    return (
          <div></div>

    );
};

export default CustomDrawer;

/**
 * 
 *  <Drawer
                variant="permanent"
                classes={{
                  paper: classes.drawerPaper,
                }}
            >
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
 */