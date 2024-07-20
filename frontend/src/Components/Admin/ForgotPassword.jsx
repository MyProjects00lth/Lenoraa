import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSendOTP = async () => {
        try {
            const response = await fetch(`http://localhost:8801/AdminUser/forgotpassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            setError('An error occurred. Please try again.');
            console.error('Forgot Password error:', error);
        }
    };

    const handleResetPassword = async () => {
        try {
            const response = await fetch(`http://localhost:8801/AdminUser/resetpassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp, newPassword }),
            });

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            setError('An error occurred. Please try again.');
            console.error('Reset Password error:', error);
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
                    handleResetPassword();
                }}
            >
                <Typography variant="h5" component="h2" align="center" gutterBottom>
                    Forgot Password
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
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSendOTP}
                    disabled={!email}
                >
                    Send OTP
                </Button>
                {message && <Typography>{message}</Typography>}
                {otp && (
                    <>
                        <TextField
                            fullWidth
                            label="OTP"
                            margin="normal"
                            variant="outlined"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="New Password"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            type="submit"
                            disabled={!otp || !newPassword}
                        >
                            Reset Password
                        </Button>
                    </>
                )}
                {error && <Typography color="error">{error}</Typography>}
            </Box>
        </Grid>
    );
}
