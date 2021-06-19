import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import AuthenticationService from 'lib/AuthenticationService' 


const SignUp = ({ login }) => {
  
  const [hasSignUpFailed, setHasSignUpFailed] = useState(false);
  
  const [inputs, setInputs] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
  })

  const {
      firstName, lastName, email, password
  } = inputs;

  const onChange = e => {
      setInputs({
          ...inputs,
          [e.target.name]: e.target.value
      });
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(16),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  const history = useHistory();
  
  
  const handleRoute = () =>{ 
    history.push("/signIn");
  }

  const openPopupForOpenBankingAuthentication = () =>{
      let popup = window.open('about:blank');
      popup.location = "https://testapi.openbanking.or.kr/oauth/2.0/authorize?" +
            "response_type=code&"+
            "client_id=545f917f-11ee-4e98-acb9-2a607c368be3&"+ // 
            "redirect_uri=http://localhost:3000/authResult&"+
            "scope=login inquiry&"+ // login inquiry transfer
            "state=b80BLsfigm9OokPTjy03elbJqRHOfGSY&"+
            "auth_type=0";
  };

  //signUp
  const handleClick = () => {
    try {
      AuthenticationService.signUp(firstName, lastName, email, password)
      .then((response) => {
        handleRoute()
      }).catch( (error) =>{
          setHasSignUpFailed(true)
          console.log(error.response)
      })
    } catch (e) {
      console.log(e)
      alert("Failed to signUp")
      //setEmail("")
      //setPassword("")
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={onChange} 
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={onChange} 
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={onChange} 
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={onChange} 
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link onClick={handleRoute} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};


export default SignUp;