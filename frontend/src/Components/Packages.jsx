import { Button, ButtonGroup, Grid, Typography } from '@mui/material'
import React from 'react'
import NavBar from './NavBar2'
import ContactMe from './ContactMe';
import img1 from './img/weddingimg1.jpg'
import img2 from './img/weddingimg2.jpg'
import img3 from './img/weddingimg3.jpg'
import img4 from './img/weddingimg5.jpg'

export default function Packages() {
    return (
        <Grid>
            <NavBar />
            <Grid sx={{ paddingTop: '20px' }}>
                <Grid className='container'>
                <center>
                    <Typography variant='h5' sx={{ color: '#42763D', letterSpacing: 3 }}>
                        <b>OUR PACKAGES</b>
                    </Typography>
                    <Grid sx={{paddingBottom: '20px'}}>
                        <ButtonGroup variant="text" aria-label="Basic button group" sx={{color: 'green'}}>
                        <Button sx={{ color: 'green' }}>
                            <b><a href='#pkg1' style={{ textDecoration: 'none', color: 'black' }}>One Day Function (FHD Quality)</a></b>
                        </Button>
                        <Button sx={{ color: 'green' }}>
                            <b><a href='#pkg2' style={{ textDecoration: 'none', color: 'black' }}>One Day Function (4K Quality)</a></b>
                        </Button>
                        <Button sx={{ color: 'green' }}>
                            <b><a href='#pkg3' style={{ textDecoration: 'none', color: 'black' }}>Pre Wedding Shoot (FHD Quality)</a></b>
                        </Button>
                        <Button sx={{ color: 'green' }}>
                            <b><a href='#pkg4' style={{ textDecoration: 'none', color: 'black' }}>Pre Wedding Shoot (4K Quality)</a></b>
                        </Button>
                        <Button sx={{ color: 'green' }}>
                            <b><a href='#' style={{ textDecoration: 'none', color: 'black' }}>Special Packages</a></b>
                        </Button>
                        </ButtonGroup>
                    </Grid>
                </center>
                </Grid>

                <Grid id='pkg1'
                    sx={{
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        backgroundImage: `linear-gradient(to left, black 0%, transparent 100%), url(${img1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        textAlign: 'left',
                        padding: '20px'
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                    <Typography variant='h5' sx={{letterSpacing: 3, fontStyle: 'italic' }}>
                        <b>ONE DAY FUNTION (FHD QUALITY)</b>
                    </Typography>
                    <Typography variant='h5' sx={{paddingTop:'20px'}}>BASIC PACKAGE</Typography>
                    <br />
                    <Typography>12 Hours Coverage.</Typography>
                    <Typography>One Camera Cover In Function.</Typography>
                    <Typography>- Bride or Groom Getting Ready</Typography>
                    <Typography>- First Look & Beauty Session</Typography>
                    <Typography>- Full Ceremony Coverage</Typography>
                    <Typography>- Reception Captured</Typography>
                    <Typography>- (10 - 30min.) Highlight Video</Typography>
                    <Typography>- (2 - 3min.) Cinematic Visual Video</Typography>
                    <Typography>- 16 GB Pen Drive</Typography>
                    <Typography variant='h5'><b>RS. 45 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px'}}>SILVER PACKAGE</Typography>
                    <br />
                    <Typography>12 Hours Coverage.</Typography>
                    <Typography>Two Cameras Cover In Function.</Typography>
                    <Typography>- Bride or Groom Getting Ready</Typography>
                    <Typography>- First Look & Beauty Session</Typography>
                    <Typography>- Full Ceremony Coverage</Typography>
                    <Typography>- Reception Captured</Typography>
                    <Typography>- (60 - 90min.) Full Length Documentary</Typography>
                    <Typography>- (2 - 3min.) Cinematic Visual Video</Typography>
                    <Typography>- 16 GB Pen Drive</Typography>
                    <Typography variant='h5'><b>RS. 75 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px'}}>GOLD PACKAGE</Typography>
                    <br />
                    <Typography>13 Hours Coverage.</Typography>
                    <Typography>Three Cameras Cover In Function.</Typography>
                    <Typography>- Bride Get In Reddy</Typography>
                    <Typography>- Groom Get In Reddy</Typography>
                    <Typography>- First Look & Beauty Session</Typography>
                    <Typography>- Full Seramany Cover</Typography>
                    <Typography>- Reception cactured</Typography>
                    <Typography>- Group Video Session</Typography>
                    <Typography>- Going Away Shoot</Typography>
                    <Typography>- (60 - 90min.) Full Length Documentary</Typography>
                    <Typography>- (3 - 5min.) Cinematic Visual Video</Typography>
                    <Typography>- 32 GB Wooden Pen Drive With Box</Typography>
                    <Typography variant='h5'><b>RS. 125 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px'}}>PLATINUM PACKAGE</Typography>
                    <br />
                    <Typography>15 Hours Coverage.</Typography>
                    <Typography>Three Cameras & One Drone Camera Cover In Function.</Typography>
                    <Typography>- Bride Get In Reddy</Typography>
                    <Typography>- Groom Get In Reddy</Typography>
                    <Typography>- Aerial Shots</Typography>
                    <Typography>- First Look & Beauty Session</Typography>
                    <Typography>- Full Seramany Cover</Typography>
                    <Typography>- Reception cactured</Typography>
                    <Typography>- Group Video Session</Typography>
                    <Typography>- Going Away Shoot</Typography>
                    <Typography>- (60 - 90min.) Full Length Documentary</Typography>
                    <Typography>- ( 10 - 30min.) Function Day Highlights</Typography>
                    <Typography>- (3 - 5min.) Cinematic Visual Video</Typography>
                    <Typography>- 32 GB Wooden Pen Drive With Box</Typography>
                    <Typography variant='h5'><b>RS. 155 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px'}}>Extra :</Typography>
                    <Typography>Going Away Shoot : Rs. 10 000/=</Typography>
                    <Typography>Drone Camera ( 12 Hours ) : 20 000/=</Typography>
                    <Typography>10 - 30min Highlight Video : Rs. 15 000/=</Typography>
                    <Typography>16 GB Wooden Pen Drive With Wooden Box : Rs. 15 000/=</Typography>
                    <Typography>32 GB Wooden Pen Drive With Wooden Box : Rs. 18 000/=</Typography>
                    <Typography>64 GB Wooden Pen Drive With Wooden Box : Rs. 20 000/=</Typography>
                    </Grid>
                    </Grid>
                </Grid>
                
                <Grid id='pkg2'
                    sx={{
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        backgroundImage: `linear-gradient(to right, black 0%, transparent 100%), url(${img2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        textAlign: 'left',
                        padding: '20px'
                    }}
                >
                    <Grid className='container'>
                    <Typography variant='h5' sx={{letterSpacing: 3, fontStyle: 'italic' }}>
                        <b>ONE DAY FUNTION (4K QUALITY)</b>
                    </Typography>
                    <Typography variant='h5' sx={{paddingTop:'20px'}}>BASIC PACKAGE</Typography>
                    <br />
                    <Typography>12 Hours Coverage.</Typography>
                    <Typography>One Camera Cover In Function.</Typography>
                    <Typography>- Bride or Groom Getting Ready</Typography>
                    <Typography>- First Look & Beauty Session</Typography>
                    <Typography>- Full Ceremony Coverage</Typography>
                    <Typography>- Reception Captured</Typography>
                    <Typography>- (10 - 30min.) Highlight Video</Typography>
                    <Typography>- (2 - 3min.) Cinematic Visual Video</Typography>
                    <Typography>- 32 GB Pen Drive</Typography>
                    <Typography variant='h5'><b>RS. 65 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px'}}>SILVER PACKAGE</Typography>
                    <br />
                    <Typography>12 Hours Coverage.</Typography>
                    <Typography>Two Cameras Cover In Function.</Typography>
                    <Typography>- Bride or Groom Getting Ready</Typography>
                    <Typography>- First Look & Beauty Session</Typography>
                    <Typography>- Full Ceremony Coverage</Typography>
                    <Typography>- Reception Captured</Typography>
                    <Typography>- (60 - 90min.) Full Length Documentary</Typography>
                    <Typography>- (2 - 3min.) Cinematic Visual Video</Typography>
                    <Typography>- 32 GB Wooden Pen Drive With Box</Typography>
                    <Typography variant='h5'><b>RS. 95 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px'}}>GOLD PACKAGE</Typography>
                    <br />
                    <Typography>13 Hours Coverage.</Typography>
                    <Typography>Three Cameras Cover In Function.</Typography>
                    <Typography>- Bride Get In Reddy</Typography>
                    <Typography>- Groom Get In Reddy</Typography>
                    <Typography>- First Look & Beauty Session</Typography>
                    <Typography>- Full Ceremany Cover</Typography>
                    <Typography>- Reception cactured</Typography>
                    <Typography>- Group Video Session</Typography>
                    <Typography>- Going Away Shoot</Typography>
                    <Typography>- (60 - 90min.) Full Length Documentary</Typography>
                    <Typography>- (3 - 5min.) Cinematic Visual Video</Typography>
                    <Typography>- 64 GB Wooden Pen Drive With Box</Typography>
                    <Typography variant='h5'><b>RS. 145 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px'}}>PLATINUM PACKAGE</Typography>
                    <br />
                    <Typography>15 Hours Coverage.</Typography>
                    <Typography>Three Cameras & One Drone Camera Cover In Function.</Typography>
                    <Typography>- Bride Get In Reddy</Typography>
                    <Typography>- Groom Get In Reddy</Typography>
                    <Typography>- Aerial Shots</Typography>
                    <Typography>- First Look & Beauty Session</Typography>
                    <Typography>- Full Seramany Cover</Typography>
                    <Typography>- Reception cactured</Typography>
                    <Typography>- Group Video Session</Typography>
                    <Typography>- Going Away Shoot</Typography>
                    <Typography>- (60 - 90min.) Full Length Documentary</Typography>
                    <Typography>- (10 - 30min.) Function Day Highlights</Typography>
                    <Typography>- (3 - 5min.) Cinematic Visual Video</Typography>
                    <Typography>- 128 GB Wooden Pen Drive With Box</Typography>
                    <Typography variant='h5'><b>RS. 185 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px'}}>Extra :</Typography>
                    <Typography>Going Away Shoot : Rs. 15 000/=</Typography>
                    <Typography>Drone Camera ( 12 Hours ) : 25 000/=</Typography>
                    <Typography>10 - 30min Highlight Video : Rs. 20 000/=</Typography>
                    <Typography>16 GB Wooden Pen Drive With Wooden Box : Rs. 15 000/=</Typography>
                    <Typography>32 GB Wooden Pen Drive With Wooden Box : Rs. 18 000/=</Typography>
                    <Typography>64 GB Wooden Pen Drive With Wooden Box : Rs. 20 000/=</Typography>
                    <Typography>128 GB Wooden Pen Drive With Wooden Box : Rs. 23 000/=</Typography>
                    </Grid>
                </Grid>

                <Grid id='pkg3'
                    sx={{
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        backgroundImage: `linear-gradient(to left, black 0%, transparent 100%), url(${img3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        textAlign: 'left',
                        padding: '20px'
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                    <Typography variant='h5' sx={{letterSpacing: 3, fontStyle: 'italic' }}>
                        <b>PRE WEDDING SHOOT (FHD QUALITY)</b>
                    </Typography>
                    <Typography variant='h5' sx={{paddingTop:'20px'}}>SILVER PACKAGE</Typography>
                    <br />
                    <Typography>- (5 - 8) hours Coverage</Typography>
                    <Typography>- One Camera Cover In Shoot</Typography>
                    <Typography>- Full HD Quality Video</Typography>
                    <Typography variant='h5'><b>RS. 45 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px'}}>GOLD PACKAGE</Typography>
                    <br />
                    <Typography>- (5 - 8) hours Coverage</Typography>
                    <Typography>- One Camera & Drone Cover In Shoot</Typography>
                    <Typography>- Full HD Quality Video</Typography>
                    <Typography variant='h5'><b>RS. 65 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px'}}>PLATINUM PACKAGE</Typography>
                    <br />
                    <Typography>- (5 - 8) hours Coverage</Typography>
                    <Typography>- Two Camera & Drone Cover In Shoot</Typography>
                    <Typography>- Full HD Quality Video</Typography>
                    <Typography variant='h5'><b>RS. 85 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px'}}>Extra :</Typography>
                    <Typography>16 GB Wooden Pen Drive With Wooden Box : Rs. 15 000/=</Typography>
                    <Typography>Project Service For Function Day( 2 hours ) : Rs. 25 000/=</Typography>
                    </Grid>
                    </Grid>
                </Grid>

                <Grid id='pkg4'
                    sx={{
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        backgroundImage: `linear-gradient(to right, black 0%, transparent 100%), url(${img4})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        textAlign: 'left',
                        padding: '20px'
                    }}
                >
                    <Grid className='container'>
                    <Typography variant='h5' sx={{letterSpacing: 3, fontStyle: 'italic' }}>
                        <b>PRE WEDDING SHOOT (4K QUALITY)</b>
                    </Typography>
                    <Typography variant='h5' sx={{paddingTop:'20px'}}>SILVER PACKAGE</Typography>
                    <br />
                    <Typography>- (5 - 8) hours Coverage</Typography>
                    <Typography>- One Camera Cover In Shoot</Typography>
                    <Typography>- 4k Quality Video</Typography>
                    <Typography variant='h5'><b>RS. 55 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px'}}>GOLD PACKAGE</Typography>
                    <br />
                    <Typography>- (5 - 8) hours Coverage</Typography>
                    <Typography>- One Camera & Drone Cover In Shoot</Typography>
                    <Typography>- 4k Quality Video</Typography>
                    <Typography variant='h5'><b>RS. 80 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px'}}>PLATINUM PACKAGE</Typography>
                    <br />
                    <Typography>- (5 - 8) hours Coverage</Typography>
                    <Typography>- Two Camera & Drone Cover In Shoot</Typography>
                    <Typography>- 4k Quality Video</Typography>
                    <Typography variant='h5'><b>RS. 100 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px'}}>Extra :</Typography>
                    <Typography>16 GB Wooden Pen Drive With Wooden Box : Rs. 15 000/=</Typography>
                    <Typography>Project Service For Function Day( 2 hours ) : Rs. 25 000/=</Typography>
                    </Grid>
                </Grid>

            </Grid>
            <ContactMe/>
        </Grid>
    )
}
