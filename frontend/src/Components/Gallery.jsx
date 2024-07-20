import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Card, CardContent, CardMedia, Button } from '@mui/material';
import NavBar from './NavBar2';

export default function Gallery() {
  const [weddings, setWeddings] = useState([]);

  useEffect(() => {
    // Fetch all weddings from the backend
    const fetchWeddings = async () => {
        try {
          const response = await fetch('http://localhost:8801/Wedding/allEvents', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
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
        }
      };

    fetchWeddings();
  }, []);

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  }

  const handleMouseLeave = () => {
    setHoveredCard(null);
  }

  return (
    <Grid container direction="column">
      {/* <NavBar /> */}
      <Grid item className="container" id='gallery'>
        <center>
          <Typography variant="h5" sx={{ color: '#42763D', letterSpacing: 3, paddingTop: '50px' }}>
            <b>GALLERY</b>
          </Typography>
        </center>
        <Grid container spacing={1} justifyContent="center" sx={{ padding: '20px' }} >
          {weddings.map((wedding) => (
            <Grid item key={wedding._id} xs={12} sm={6} md={4}>
              <Paper
                elevation={3}
                sx={{
                  cursor: 'pointer',
                  margin: '20px',
                  padding: '10px',
                  transition: 'transform 1s',
                  transform: hoveredCard === wedding._id ? 'scale(1.1)' : 'scale(1)'
                }}
                onMouseEnter={() => handleMouseEnter(wedding._id)}
                onMouseLeave={handleMouseLeave}
              >
                <Card>
                  {wedding.videoLink && (
                    <CardMedia
                      component="img"
                      height="250"
                      image={`https://img.youtube.com/vi/${getYouTubeVideoID(wedding.videoLink)}/0.jpg`}
                      title="Wedding Video"
                      onClick={() => window.open(wedding.videoLink, '_blank')}
                    />
                  )}
                  <CardContent>
                    <center>
                      <Typography variant="h6">
                        {wedding.couples}
                      </Typography>
                    </center>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );

  function getYouTubeVideoID(url) {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }
}
