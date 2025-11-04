import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router";

const STORAGE_KEY = "fake_auth_credientials"

const getStorageCredientials = () => {
 const stored =  localStorage.getItem(STORAGE_KEY)
 if (stored) {
  try {
   return  JSON.parse(stored)
  }
  catch{
    console.error("KEY_ERROR")
  }
 }
 const default_login = {username: "admin", password: "1234"}
 localStorage.setItem(STORAGE_KEY, JSON.stringify(default_login))
}

const LoginComponant = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snack, setSnack] = useState({
    message: "",
    open: false,
    type: ""
  })

  const handleClose = () => {
    setSnack((prev) => ({...prev, open: false}))
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
  const stored = getStorageCredientials()
  if (username.trim() === stored.username && password.trim() === stored.password) {
    // success
    localStorage.setItem(STORAGE_KEY, JSON.stringify({username, password}))
    localStorage.setItem("fake_auth_logged_in", "true")
    setSnack({
      open: true,
      message: "Login Successfull!!!",
      type: "success"
    })
   setTimeout(() => navigate("/dashboard"), 1000);
  } else {
    console.log("pasw or login is wrong")
    setSnack({
      open: true,
      message: "Invalid Password or login!!!",
      type: "error"
    })
  }
  } 

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #fdfcf8 0%, #f6f2e9 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper elevation={8} sx={{ p: 4, borderRadius: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              Sign in
            </Typography>
            <Box onSubmit={handleSubmit} component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.2,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" underline="hover">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" underline="hover">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
        <Snackbar 
        open={snack.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{vertical: "top", horizontal: "right"}}
        >
          <Alert 
          severity={snack.type}
          variant="filled" 
          onClose={handleClose} 
          sx={{width: "100%"}}>
          {snack.message}
          </Alert>
        </Snackbar>
    </Box>
  );
};

export default LoginComponant;
