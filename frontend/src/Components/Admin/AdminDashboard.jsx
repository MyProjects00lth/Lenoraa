import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  Modal,
  Paper,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { jwtDecode } from 'jwt-decode';
import userprofile from '../img/sanka.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminDashboard() {
  const [adminDetails, setAdminDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', email: '', password: '' });
  const [weddingCount, setWeddingCount] = useState(0);
  // const [pkgCount, setpkgCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWeddingCount();
    // fetchPkgCount();
  }, []);

  const fetchWeddingCount = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:8801/Wedding/allWedding', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      const count = data.length;
      setWeddingCount(count);
    } catch (error) {
      console.error('Error fetching wedding count:', error);
    }
  }

  useEffect(() => {
    const fetchAdminDetails = async (id) => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`http://localhost:8801/AdminUser/details/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setAdminDetails(data);
          setFormValues({ name: data.name, email: data.email, password: '' });
        } else {
          console.error('Failed to fetch admin details:', data.message);
        }
      } catch (error) {
        console.error('Error fetching admin details:', error);
      }
    };

    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      fetchAdminDetails(decoded.id); // Pass the user ID decoded from the token
    } else {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleViewWeddings = () => {
    navigate('/wedding');
  };

  const openUrl = (url) => {
    window.location.href = url;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:8801/AdminUser/edituser', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      if (response.ok) {
        setAdminDetails(data);
        handleCloseModal();
        toast.success('Admin Details Update successfully!');
      } else {
        console.error('Failed to update admin details:', data.message);
        toast.error('Failed update admin details. Please try again.');
      }
    } catch (error) {
      console.error('Error updating admin details:', error);
    }
  };

  if (!adminDetails) {
    return <center>
      <Box sx={{ display: 'flex', textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    </center>;
  }

  return (
    <div className='container'>
      <ToastContainer />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} style={{ paddingTop: '50px' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Admin Dashboard
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingTop: '37px' }}>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={10}>
          <Grid style={{ paddingTop: '20px' }}>
            <Typography variant="h6"><b>Admin:</b> {adminDetails.name}</Typography>
            <Typography variant="h6"><b>Email:</b> {adminDetails.email}</Typography>
            <Box>
              <IconButton variant='outlined' color='primary' onClick={handleOpenModal}>
                <EditIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={2}>
          <img src={userprofile} alt='Profile image' width="125" height="125" style={{ borderRadius: '100px' }} />
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={2} sx={{ paddingTop: '20px' }}>
        <Grid item xs={12} sm={6}>
          <Card style={{ height: '200px', backgroundColor: '#BADCFF' }}>
            <p style={{ textAlign: 'left', marginLeft: '10px', marginTop: '3px', fontSize: '15px' }}><b>ALL WEDDINGS</b></p>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <center>
                    <Typography>
                      <CelebrationIcon sx={{ fontSize: 50 }} />
                    </Typography>
                  </center>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <center>
                    <Typography variant="h5" component="h2" style={{ paddingTop: '10px' }}>
                      {weddingCount}
                    </Typography>
                  </center>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card style={{ height: '200px', backgroundColor: '#BADCFF' }}>
            <Grid container justifyContent="center" sx={{paddingTop: '70px'}}>
              <IconButton aria-label="facebook" color="primary" onClick={() => openUrl('https://www.facebook.com/lenoraastudio?mibextid=LQQJ4d')}>
                <FacebookRoundedIcon />
              </IconButton>
              <IconButton aria-label="instagram" sx={{ color: '#c71585' }} onClick={() => openUrl('https://www.instagram.com/lenoraa_official?igsh=N2cxOTJpYm5ma2lt')}>
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="youtube" color="error" onClick={() => openUrl('https://www.youtube.com/@lenoraaweddingfilms')}>
                <YouTubeIcon />
              </IconButton>
            </Grid>
            {/* <p style={{ textAlign: 'left', marginLeft: '10px', marginTop: '3px', fontSize: '15px' }}><b>PACKAGES</b></p>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <center>
                    <Typography>
                      <InventoryIcon sx={{ fontSize: 50 }} />
                    </Typography>
                  </center>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <center>
                    <Typography variant="h5" component="h2" style={{ paddingTop: '10px' }}>
                      23
                    </Typography>
                  </center>
                </Grid>
              </Grid>
            </CardContent> */}
          </Card>
        </Grid>
      </Grid>

      <Grid container sx={{ paddingTop: '50px' }} spacing={2}>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Box>
            <Button variant="contained" color="primary" onClick={handleViewWeddings} sx={{ paddingLeft: '41px', paddingRight: '41px' }}>
              View Weddings
            </Button>
          </Box>
        </Grid>
        {/* <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Box>
            <Button variant="contained" color="primary" component={Link} to='/allPkg'>
              View Package Details
            </Button>
          </Box>
        </Grid> */}
      </Grid>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Paper style={{ padding: '20px', margin: '50px auto', width: '400px', position: 'relative' }}>
          <IconButton
            onClick={handleCloseModal}
            style={{ position: 'absolute', top: '10px', right: '10px' }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2" gutterBottom>
            Edit Admin Details
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              margin="normal"
            />
            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </Box>
          </form>
        </Paper>
      </Modal>
    </div>
  );
}
