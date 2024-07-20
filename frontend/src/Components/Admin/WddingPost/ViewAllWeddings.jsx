import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function WeddingsTable() {
  const [weddings, setWeddings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [currentWedding, setCurrentWedding] = useState({ couples: '', date: '', description: '', videoLink: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeddings = async () => {
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
        if (response.ok) {
          setWeddings(data);
        } else {
          console.error('Failed to fetch weddings:', data.message);
        }
      } catch (error) {
        console.error('Error fetching weddings:', error);
      } finally {
        setLoading(false);
      }
    };

    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      fetchWeddings(decoded.id);
    } else {
      navigate('/admin');
    }
  }, [navigate]);

  const handleAdd = () => {
    setCurrentWedding({ couples: '', date: '', description: '', videoLink: '' });
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:8801/Wedding/deletewedding/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setWeddings(weddings.filter((wedding) => wedding._id !== id));
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Wedding Delete successfully!');
      } else {
        const data = await response.json();
        console.error('Failed to delete wedding:', data.message);
        toast.error('Failed to delete wedding. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting wedding:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentWedding({ couples: '', date: '', description: '', videoLink: '' });
  };

  const handleAddWedding = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:8801/Wedding/postwedding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(currentWedding),
      });

      const data = await response.json();
      if (response.ok) {
        setWeddings([...weddings, data]);
        toast.success('Wedding added successfully!');
        handleClose();
      } else {
        console.error('Failed to add wedding:', data.message);
        toast.error('Failed to added wedding. Please try again.');
      }
    } catch (error) {
      console.error('Error adding wedding:', error);
    }
  };

  const handleSave = () => {
    handleAddWedding();
  };

  const columns = [
    { field: 'couples', headerName: 'Couples', width: 200 },
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'description', headerName: 'Description', width: 400 },
    { 
      field: 'videoLink', 
      headerName: 'Video Link', 
      width: 340,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          {params.value}
        </a>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <>
        <IconButton component={Link} to={`/editwedding/${params.row.id}`} >
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete(params.row.id)}>
          <DeleteIcon />
        </IconButton>
        </> 
      ),
    },
  ];

  const rows = weddings.map((wedding) => ({
    id: wedding._id,
    couples: wedding.couples,
    date: wedding.date,
    description: wedding.description,
    videoLink: wedding.videoLink,
  }));

  return (
    <Grid className='container' sx={{ paddingTop: '50px' }}>
      <ToastContainer/>
      <Box sx={{ height: 400, width: '100%' }}>
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
          <Grid item>
            <Typography variant="h4" component="h1" gutterBottom>
              Weddings List
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleAdd}>
              Add Data
            </Button>
          </Grid>
        </Grid>
        <DataGrid sx={{ height: 800, width: '100%' }} rows={rows} columns={columns} pageSize={5} loading={loading} />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Wedding</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter the details of the new wedding.</DialogContentText>
            <TextField
              margin="dense"
              label="Couples"
              fullWidth
              required
              value={currentWedding.couples}
              onChange={(e) => setCurrentWedding({ ...currentWedding, couples: e.target.value })}
            />
            <TextField
              type='date'
              margin="dense"
              fullWidth
              required
              value={currentWedding.date}
              onChange={(e) => setCurrentWedding({ ...currentWedding, date: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Description"
              fullWidth
              multiline
              rows={4}
              required
              value={currentWedding.description}
              onChange={(e) => setCurrentWedding({ ...currentWedding, description: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Video Link"
              type='url'
              fullWidth
              value={currentWedding.videoLink}
              onChange={(e) => setCurrentWedding({ ...currentWedding, videoLink: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>
  );
}
