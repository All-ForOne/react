import Icon from '@mdi/react'
import { mdiLogin } from '@mdi/js'
import { mdiLogout } from '@mdi/js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const CustomAppBar = ({authenticated, logout}) => {
    const useStyles = makeStyles((theme) => ({
        toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        },
        appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        },
        menuButtonHidden: {
        display: 'none',
        },
        title: {
        flexGrow: 1,
        },
    }));
    const history  = useHistory();

    const classes = useStyles();
    const SignIn = () => {
        history.push("/SignIn")
    }
    
    const SignUp = () => {
        history.push("/SignUp")
    }

    return (
    
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Lessonus
            </Typography>
            <IconButton 
                color="inherit"
                className={clsx(!authenticated && classes.menuButtonHidden)}
            >
                <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
                </Badge>
            </IconButton>
            <IconButton 
                color="inherit" 
                onClick={SignUp}
                className={clsx(authenticated && classes.menuButtonHidden)}
            >
                <Badge color="secondary">
                <PersonAddIcon />
                </Badge>
            </IconButton>
            { !authenticated && 
            <IconButton 
                color="inherit" 
                onClick={SignIn}
                className={clsx(authenticated && classes.menuButtonHidden)}
            >
                <Icon path={mdiLogin}
                    title="Sign In"
                    size={1}
                    color="white"
                />
            </IconButton>
            }
            <IconButton 
                color="inherit" 
                onClick={logout}
                className={clsx(!authenticated && classes.menuButtonHidden)}
            >
                <Icon path={mdiLogout}
                    title="Logout"
                    size={1}
                    color="white"
                />
            </IconButton>
            </Toolbar>
        </AppBar>
    
    );
};

export default CustomAppBar;