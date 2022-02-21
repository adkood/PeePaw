// import classes from "./LogIn.module.css";
// import React, { useEffect } from "react";
// import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { authSliceActions } from "../store";
// import { useRouter } from "next/router";

// const Login = () => {
//   const emailInputRef = useRef<HTMLInputElement>(null);
//   const passwordInputRef = useRef<HTMLInputElement>(null);
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const enteredEmail = emailInputRef.current!.value;
//     const enteredPassword = passwordInputRef.current!.value;

//     // dispatch(authSliceActions.login());
//     try {
//       const response = await fetch(
//         "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzXpKIbeKwgDndJpk1QvJws49LbGpnQWk",
//         {
//           method: "POST",
//           body: JSON.stringify({
//             email: enteredEmail,
//             password: enteredPassword,
//             returnSecureToken: true,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Authentication Failed!");
//       }

//       const data = await response.json();
//       const TokenId = data.idToken;
//       console.log(data.name);
//       console.log(data.petName);
//       dispatch(authSliceActions.login(TokenId));
//       router.replace('/home');

//     } catch (err) {
//       alert(err);
//     }
//   };

//   return (
//     <form className={classes.form} onSubmit={onSubmitHandler}>
//       <input
//         className={classes.input}
//         type="text"
//         placeholder="Enter your Email"
//         ref={emailInputRef}
//       ></input>
//       <input
//         className={classes.input}
//         type="text"
//         placeholder="Enter your Password"
//         ref={passwordInputRef}
//       ></input>
//       <button>Login</button>
//     </form>
//   );
// };
// export default Login;

import * as React from "react";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../store";
import { useRouter } from "next/router";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  const dispatch = useDispatch();
  const router = useRouter();
  
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const data = new FormData(event.currentTarget);
    // const enteredEmail = emailInputRef.current!.value;
    // const enteredPassword = passwordInputRef.current!.value;
    const enteredEmail = data.get("email");
    const enteredPassword = data.get("password");

    // dispatch(authSliceActions.login());
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzXpKIbeKwgDndJpk1QvJws49LbGpnQWk",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Authentication Failed!");
      }

      const data = await response.json();
      const TokenId = data.idToken;
      console.log(data.name);
      console.log(data.petName);
      dispatch(authSliceActions.login(TokenId));
      router.replace("/home");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://cdn.pixabay.com/photo/2020/11/10/09/06/man-5728989_1280.png)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={onSubmitHandler}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
