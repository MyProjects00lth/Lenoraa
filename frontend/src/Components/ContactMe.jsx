import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './img/logo.png';

export default function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subjects, setSubjects] = useState('');
    const [message, setMessage] = useState('');

    const sendMail = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subjects,
            message: message
        };

        emailjs.send('service_b8xy4w8', 'template_jlv2ywo', templateParams, 'Mupo9YGoJeMdEozJj')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Email sent successfully!');
                // Optionally clear form fields
                setName('');
                setEmail('');
                setSubjects('');
                setMessage('');
            }, (error) => {
                console.error('FAILED...', error);
                toast.error('Failed to send email. Please try again.');
            });
    }

    const openUrl = (url) => {
        window.location.href = url;
    }

    return (
        <Grid sx={{ backgroundColor: '#282828', color: 'white', padding: '20px' }}>
            <center>
                <Grid className='container' id='contactme'>
                    <Typography variant='h5' sx={{ letterSpacing: 5, paddingTop: '50px', paddingBottom: '50px', fontFamily: 'Poppins' }}>
                        LET’S CREATE SOMETHING BEAUTIFUL TOGETHER!
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant='h5' sx={{ fontFamily: 'Poppins' }}>Let me know</Typography>
                            <form onSubmit={sendMail}>
                                <TextField
                                    fullWidth
                                    label="Your Name"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    InputLabelProps={{
                                        style: { color: 'white' },
                                    }}
                                    InputProps={{
                                        style: { color: 'white', borderColor: 'white' },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'white',
                                            },
                                        },
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Your Email"
                                    type="email"
                                    margin="normal"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    InputLabelProps={{
                                        style: { color: 'white' },
                                    }}
                                    InputProps={{
                                        style: { color: 'white', borderColor: 'white' },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'white',
                                            },
                                        },
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Subject"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    value={subjects}
                                    onChange={(e) => setSubjects(e.target.value)}
                                    required
                                    InputLabelProps={{
                                        style: { color: 'white' },
                                    }}
                                    InputProps={{
                                        style: { color: 'white', borderColor: 'white' },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'white',
                                            },
                                        },
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Type Your message here..."
                                    multiline
                                    rows={4}
                                    margin="normal"
                                    variant="outlined"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    InputLabelProps={{
                                        style: { color: 'white' },
                                    }}
                                    InputProps={{
                                        style: { color: 'white', borderColor: 'white' },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'white',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'white',
                                            },
                                        },
                                    }}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'white',
                                        borderRadius: 20,
                                        '&:hover': {
                                            backgroundColor: 'gray',
                                            color: 'white'
                                        },
                                    }}
                                >
                                    <b style={{
                                        paddingRight: '20px', paddingLeft: '20px', color: 'black',
                                        '&:hover': {
                                            color: 'white'
                                        },
                                    }}>SUBMIT</b>
                                </Button>
                            </form>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant='h5' sx={{ fontFamily: 'Poppins' }}>Contact Me</Typography>
                            <Grid sx={{ paddingTop: '20px', paddingLeft: '50px', textAlign: 'left' }}>
                                <Typography sx={{ fontFamily: 'Poppins' }}><PlaceIcon /> 47/A, Samagi Mawatha, Jayanthipura, Kurunegala, Sri Lanka</Typography>
                                <Typography sx={{ paddingTop: '20px', fontFamily: 'Poppins' }}><LocalPhoneIcon /> +94 70 666 0008</Typography>
                                <Typography sx={{ paddingTop: '20px', fontFamily: 'Poppins' }} ><EmailIcon /> lenoraaofficial@gmail.com</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <hr style={{ height: '2px', backgroundColor: 'white' }} />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <img src={logo} style={{ width: '150px' }} alt="Logo" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography gutterBottom sx={{ fontFamily: 'Poppins' }}><b>Service</b></Typography>
                            <a style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', fontFamily: 'Poppins' }}><p>Wedding Videography</p></a>
                            <a style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', fontFamily: 'Poppins' }}><p>Event Videography</p></a>
                            <a style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', fontFamily: 'Poppins' }}><p>Live Stream</p></a>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography gutterBottom sx={{ fontFamily: 'Poppins' }}><b>Follow Us</b></Typography>
                            <IconButton aria-label="facebook" color='primary' onClick={() => openUrl('https://www.facebook.com/lenoraastudio?mibextid=LQQJ4d')}>
                                <FacebookRoundedIcon />
                            </IconButton>
                            <IconButton aria-label="instagram" sx={{ color: '#c71585' }} onClick={() => openUrl('https://www.instagram.com/lenoraa_official?igsh=N2cxOTJpYm5ma2lt')}>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton aria-label="whatsapp" color='success' onClick={() => openUrl('https://www.whatsapp.com')}>
                                <WhatsAppIcon />
                            </IconButton>
                            <IconButton aria-label="youtube" color='error' onClick={() => openUrl('https://www.youtube.com/@lenoraaweddingfilms')}>
                                <YouTubeIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <hr style={{ height: '2px', backgroundColor: 'white' }} />
                    <Typography style={{ fontSize: '12px', fontWeight: '10', fontFamily: 'Poppins' }}>
                        Design By <a href='https://lakmal-thathsara-portfolio.netlify.app/' style={{ fontSize: '12px', fontWeight: '300' }}>Lakmal Thathsara</a>
                    </Typography>
                </Grid>
            </center>
            <ToastContainer />
        </Grid>
    )
}
