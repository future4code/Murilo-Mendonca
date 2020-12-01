import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL'

// Material Ui Imports
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import LockOpen from '@material-ui/icons/LockOpen';


function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/murilomendonca/" target="_blank">
        Murilo Mendonca - Labenu
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const history = useHistory();

  useEffect (() => {
    const token = localStorage.getItem("token")
        if(token) {
            history.push("/feed")
        }
}, [history])

  const login = () => {
      const body = {
          email: email,
          password: password
      }
      axios.post(`${BASE_URL}/login`, body)
      .then((response) => {
          localStorage.setItem("token", response.data.token)
          history.push("/feed")
      })
      .catch((error) => {
          alert(error.message)
      })
  }

  const handleEmail = (event) => {
      setEmail(event.target.value)
  }

  const handlePassword = (event) => {
      setPassword(event.target.value)
  }

  const goToSignUpPage = () => {
    history.push("/signup")
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpen />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            value={email}
            onChange={handleEmail}
            // autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={handlePassword}
          />
          
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            Sign In
          </Button>

          <Button 
            fullWidth 
            color="secondary" 
            onClick={goToSignUpPage}
          >
            {"Don't have an account? Sign Up"}
          </Button>    
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignIn;