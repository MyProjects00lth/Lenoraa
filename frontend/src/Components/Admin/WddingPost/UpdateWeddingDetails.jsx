import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Grid, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateWeddingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [wedding, setWedding] = useState({
    couples: '',
    date: '',
    description: '',
    videoLink: ''
  });

  useEffect(() => {
    const fetchWedding = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8801/Wedding/wedding/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setWedding(data);
        } else {
          console.error('Failed to fetch wedding details:', data.message);
        }
      } catch (error) {
        console.error('Error fetching wedding details:', error);
      }
    };

    fetchWedding();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8801/Wedding/updatewedding/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(wedding),
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
    setWedding({ ...wedding, [name]: value });
  };

  return (
    <Grid container justifyContent="center">
      <ToastContainer/>
      <Box sx={{ width: '60%', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Update Wedding Details
        </Typography>
        <form onSubmit={handleUpdate}>
          <TextField
            name="couples"
            label="Couples"
            margin="normal"
            fullWidth
            required
            value={wedding.couples}
            onChange={handleChange}
          />
          <TextField
            name="date"
            type="date"
            label="Date"
            margin="normal"
            fullWidth
            required
            value={wedding.date}
            onChange={handleChange}
          />
          <TextField
            name="description"
            label="Description"
            margin="normal"
            fullWidth
            required
            multiline
            rows={4}
            value={wedding.description}
            onChange={handleChange}
          />
          <TextField
            name="videoLink"
            label="Video Link"
            margin="normal"
            type="url"
            fullWidth
            value={wedding.videoLink}
            onChange={handleChange}
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </Box>
        </form>
      </Box>
    </Grid>
  );
};

export default UpdateWeddingDetails;
