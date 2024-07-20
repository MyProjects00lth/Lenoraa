import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    try {
      const response = await fetch(`http://localhost:8801/AdminUser/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        // Store the token and navigate to the admindashboard
        localStorage.setItem('token', data.token);
        navigate('/admindashboard');
      } else {
        setError(data.message);
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Box
        component="form"
        sx={{
          p: 3,
          border: '1px solid grey',
          borderRadius: '8px',
          boxShadow: 1,
          width: '300px',
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Admin Login
        </Typography>
        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            Login
          </Button>
        </Box>
        <Box mt={2} textAlign="center">
          <Link href="/resetpwd" variant="body2">
            Forgot Password?
          </Link>
        </Box>
      </Box>
    </Grid>
  );
}
