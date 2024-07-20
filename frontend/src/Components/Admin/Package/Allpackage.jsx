import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Allpackage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [oneDayFHDPkg, SetOneDayFHDPkg] = useState({
    basic : "",
    silver : "",
    gold : "",
    platinum : "",
    goingAway : "",
    droneCamera : "",
    highlightVideo : "",
    pendriver16 : "",
    pendriver32 : "",
    pendriver64 : ""
  });

  useEffect(() => {
    const fetchoneDayFHDPkg = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8801/OneDayFHD/package/6687ce740fae4e205de2d3ae`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          SetOneDayFHDPkg(data);
        } else {
          console.error('Failed to fetch package details:', data.message);
        }
      } catch (error) {
        console.error('Error fetching package details:', error);
      }
    }; 

    fetchoneDayFHDPkg();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8801/OneDayFHD/updatepackage/6687ce740fae4e205de2d3ae`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(oneDayFHDPkg),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Wedding updated successfully:', data);
        toast.success('Data wedding updated successfully!');
      } else {
        console.error('Failed to update wedding:', data.message);
        toast.error('Failed to update data. Please try again.');
      }
    } catch (error) {
      console.error('Error updating wedding:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetOneDayFHDPkg({ ...oneDayFHDPkg, [name]: value });
  };


  return (
    <Grid className='container' sx={{ paddingTop: '50px' }}>
      <center>
        <Typography variant='h5'><b>Modify Package Price</b></Typography>
      </center>
      <Grid sx={{ paddingTop: '20px' }}>
        <Paper sx={{ padding: '20px', margin: '50px auto', width: '70%', position: 'relative' }}>
          <Typography variant='h5'>ONE DAY FUNTION (FHD QUALITY)</Typography>
          <form onSubmit={handleUpdate}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Basic Package Price"
                  name='Basic Package Price'
                  margin='normal'
                  value={oneDayFHDPkg.basic}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Silver Package Price"
                  name='Silver Package Price'
                  margin='normal'
                  value={oneDayFHDPkg.silver}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Gold Package Price"
                  name='Gold Package Price'
                  margin='normal'
                  value={oneDayFHDPkg.gold}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Platinum Package Price"
                  name='Platinum Package Price'
                  margin='normal'
                  value={oneDayFHDPkg.platinum}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Going Away Shoot"
                  name='Going Away Shoot'
                  margin='normal'
                  value={oneDayFHDPkg.goingAway}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Drone Camera ( 12 Hours )"
                  name='Drone Camera ( 12 Hours )'
                  margin='normal'
                  value={oneDayFHDPkg.droneCamera}
                  onChange={handleChange}
                  
                />
                <TextField
                  fullWidth
                  label="10 - 30min Highlight Video"
                  name='10 - 30min Highlight Video'
                  margin='normal'
                  value={oneDayFHDPkg.highlightVideo}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="16 GB Wooden Pen Drive With Wooden Box"
                  name='16 GB Wooden Pen Drive With Wooden Box'
                  margin='normal'
                  value={oneDayFHDPkg.pendriver16}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="32 GB Wooden Pen Drive With Wooden Box"
                  name='32 GB Wooden Pen Drive With Wooden Box'
                  margin='normal'
                  value={oneDayFHDPkg.pendriver32}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="64 GB Wooden Pen Drive With Wooden Box"
                  name='64 GB Wooden Pen Drive With Wooden Box'
                  margin='normal'
                  value={oneDayFHDPkg.pendriver64}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary">
              Save Changes
            </Button>
          </form>
        </Paper>

      </Grid>
    </Grid>
  );
};

export default Allpackage;