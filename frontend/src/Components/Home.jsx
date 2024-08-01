import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import img1 from './img/img1.JPG';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Home() {
    return (
        <Grid sx={{ backgroundColor: '#EAFFEA' }}>
            <Grid className='container' id='home'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                        <Grid style={{ height: '100%', backgroundColor: '#EAFFEA' }}>
                            <>
                            <Typography variant='h2' gutterBottom sx={{ letterSpacing: 3, fontFamily: 'Poppins' }}>WE PAINT YOUR</Typography>
                            <Typography variant='h2' sx={{ color: '#42763D', letterSpacing: 3, fontFamily: 'Poppins' }}>MEMORIES</Typography>
                                <Typography style={{ paddingTop: '50px', fontFamily: 'Poppins' }}>
                                    Welcome to Lenoraa's cinematic journey, where stories come to life through the lens <br/> of a camera. As a passionate videographer,
                                    Lenoraa specializes in crafting visually stunning <br/> narratives that capture the essence of every moment. Whether it's a heartfelt
                                    wedding, a <br/>  captivating documentary, or a dynamic promotional video, Lenoraa brings creativity and <br/> expertise to each project,
                                    ensuring a captivating visual experience that resonates with <br/> audiences. Explore Lenoraa's
                                    portfolio and embark on a visual odyssey filled <br/> with emotion, depth, and unparalleled storytelling.
                                </Typography>
                                <Grid sx={{ paddingTop: '20px' }}>
                                    <Button
                                        variant="contained"
                                        component={Link} 
                                        to="/pkgs"
                                        sx={{
                                            backgroundColor: 'black',
                                            borderRadius: 20,
                                            '&:hover': {
                                                backgroundColor: 'black',
                                            },
                                        }}
                                    >
                                        <b style={{paddingRight: '20px', paddingLeft: '20px'}}>VIEW PACKAGES<ArrowForwardIcon /></b>
                                    </Button>
                                </Grid>
                            </>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Grid sx={{ height: '700px', backgroundColor: '#EAFFEA' }}>
                                <img src={img1} style={{ width: '100%', height: '600px', borderRadius: 300, }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
