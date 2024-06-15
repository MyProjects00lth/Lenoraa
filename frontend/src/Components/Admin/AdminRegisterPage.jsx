import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AdminRegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    setError('');
    setMessage('');
    try {
      const response = await fetch(`http://localhost:8801/AdminUser/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Registration successful!');
        console.log('Registration successful:', data);
        // Handle successful registration (e.g., redirect to login)
      } else {
        setError(data.message);
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Registration error:', error);
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
          handleRegister();
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Admin Register
        </Typography>
        <TextField
          fullWidth
          label="Name"
          type="text"
          margin="normal"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        {message && <Typography color="primary">{message}</Typography>}
        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            Register
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}
