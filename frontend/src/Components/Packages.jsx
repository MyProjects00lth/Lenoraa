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
                    <Typography variant='h5' sx={{ color: '#42763D', letterSpacing: 3, fontFamily: 'Poppins'}}>
                        <b>OUR PACKAGES</b>
                    </Typography>
                    <Grid sx={{paddingBottom: '20px'}}>
                        {/* <ButtonGroup variant="text" aria-label="Basic button group" sx={{color: 'green'}}> */}
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
                        {/* </ButtonGroup> */}
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
                    <Typography variant='h5' sx={{letterSpacing: 3, fontStyle: 'italic', fontFamily: 'Poppins' }}>
                        <b>ONE DAY FUNTION (FHD QUALITY)</b>
                    </Typography>
                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>BASIC PACKAGE</Typography>
                    <br />
                    <Typography sx={{fontFamily: 'Poppins'}}>12 Hours Coverage.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>One Camera Cover In Function.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Bride or Groom Getting Ready</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- First Look & Beauty Session</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Full Ceremony Coverage</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Reception Captured</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (10 - 30min.) Highlight Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (2 - 3min.) Cinematic Visual Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- 16 GB Pen Drive</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}} variant='h5'><b>RS. 45 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>SILVER PACKAGE</Typography>
                    <br />
                    <Typography sx={{fontFamily: 'Poppins'}}>12 Hours Coverage.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>Two Cameras Cover In Function.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Bride or Groom Getting Ready</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- First Look & Beauty Session</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Full Ceremony Coverage</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Reception Captured</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (60 - 90min.) Full Length Documentary</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (2 - 3min.) Cinematic Visual Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- 16 GB Pen Drive</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}} variant='h5'><b>RS. 75 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>GOLD PACKAGE</Typography>
                    <br />
                    <Typography sx={{fontFamily: 'Poppins'}}>13 Hours Coverage.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>Three Cameras Cover In Function.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Bride Get In Reddy</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Groom Get In Reddy</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- First Look & Beauty Session</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Full Seramany Cover</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Reception cactured</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Group Video Session</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Going Away Shoot</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (60 - 90min.) Full Length Documentary</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (3 - 5min.) Cinematic Visual Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- 32 GB Wooden Pen Drive With Box</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}} variant='h5'><b>RS. 125 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px', fontFamily: 'Poppins'}}>PLATINUM PACKAGE</Typography>
                    <br />
                    <Typography sx={{fontFamily: 'Poppins'}}>15 Hours Coverage.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>Three Cameras & One Drone Camera Cover In Function.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Bride Get In Reddy</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Groom Get In Reddy</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Aerial Shots</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- First Look & Beauty Session</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Full Seramany Cover</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Reception cactured</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Group Video Session</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Going Away Shoot</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (60 - 90min.) Full Length Documentary</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- ( 10 - 30min.) Function Day Highlights</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (3 - 5min.) Cinematic Visual Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- 32 GB Wooden Pen Drive With Box</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}} variant='h5'><b>RS. 155 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>Extra :</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>Going Away Shoot : Rs. 10 000/=</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>Drone Camera ( 12 Hours ) : 20 000/=</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>10 - 30min Highlight Video : Rs. 15 000/=</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>16 GB Wooden Pen Drive With Wooden Box : Rs. 15 000/=</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>32 GB Wooden Pen Drive With Wooden Box : Rs. 18 000/=</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>64 GB Wooden Pen Drive With Wooden Box : Rs. 20 000/=</Typography>
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
                    <Typography variant='h5' sx={{letterSpacing: 3, fontStyle: 'italic',fontFamily: 'Poppins' }}>
                        <b>ONE DAY FUNTION (4K QUALITY)</b>
                    </Typography>
                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>BASIC PACKAGE</Typography>
                    <br />
                    <Typography sx={{fontFamily: 'Poppins'}}>12 Hours Coverage.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>One Camera Cover In Function.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Bride or Groom Getting Ready</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- First Look & Beauty Session</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Full Ceremony Coverage</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Reception Captured</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (10 - 30min.) Highlight Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (2 - 3min.) Cinematic Visual Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- 32 GB Pen Drive</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}} variant='h5'><b>RS. 65 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>SILVER PACKAGE</Typography>
                    <br />
                    <Typography sx={{fontFamily: 'Poppins'}}> 12 Hours Coverage.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>Two Cameras Cover In Function.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Bride or Groom Getting Ready</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- First Look & Beauty Session</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Full Ceremony Coverage</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Reception Captured</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (60 - 90min.) Full Length Documentary</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (2 - 3min.) Cinematic Visual Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- 32 GB Wooden Pen Drive With Box</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}} variant='h5'><b>RS. 95 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>GOLD PACKAGE</Typography>
                    <br />
                    <Typography sx={{fontFamily: 'Poppins'}}>13 Hours Coverage.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>Three Cameras Cover In Function.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Bride Get In Reddy</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Groom Get In Reddy</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- First Look & Beauty Session</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Full Ceremany Cover</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Reception cactured</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Group Video Session</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Going Away Shoot</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (60 - 90min.) Full Length Documentary</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (3 - 5min.) Cinematic Visual Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- 64 GB Wooden Pen Drive With Box</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}} variant='h5'><b>RS. 145 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>PLATINUM PACKAGE</Typography>
                    <br />
                    <Typography sx={{fontFamily: 'Poppins'}}>15 Hours Coverage.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>Three Cameras & One Drone Camera Cover In Function.</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Bride Get In Reddy</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Groom Get In Reddy</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Aerial Shots</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- First Look & Beauty Session</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Full Seramany Cover</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Reception cactured</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Group Video Session</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Going Away Shoot</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (60 - 90min.) Full Length Documentary</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (10 - 30min.) Function Day Highlights</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- (3 - 5min.) Cinematic Visual Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- 128 GB Wooden Pen Drive With Box</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}} variant='h5'><b>RS. 185 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>Extra :</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>Going Away Shoot : Rs. 15 000/=</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>Drone Camera ( 12 Hours ) : 25 000/=</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>10 - 30min Highlight Video : Rs. 20 000/=</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>16 GB Wooden Pen Drive With Wooden Box : Rs. 15 000/=</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>32 GB Wooden Pen Drive With Wooden Box : Rs. 18 000/=</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>64 GB Wooden Pen Drive With Wooden Box : Rs. 20 000/=</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>128 GB Wooden Pen Drive With Wooden Box : Rs. 23 000/=</Typography>
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
                    <Typography variant='h5' sx={{letterSpacing: 3, fontStyle: 'italic',fontFamily: 'Poppins' }}>
                        <b>PRE WEDDING SHOOT (FHD QUALITY)</b>
                    </Typography>
                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>SILVER PACKAGE</Typography>
                    <br />
                    <Typography sx={{fontFamily: 'Poppins'}}>- (5 - 8) hours Coverage</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- One Camera Cover In Shoot</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Full HD Quality Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}} variant='h5'><b>RS. 45 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>GOLD PACKAGE</Typography>
                    <br />
                    <Typography sx={{fontFamily: 'Poppins'}}>- (5 - 8) hours Coverage</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- One Camera & Drone Cover In Shoot</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Full HD Quality Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}} variant='h5'><b>RS. 65 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>PLATINUM PACKAGE</Typography>
                    <br />
                    <Typography sx={{fontFamily: 'Poppins'}}>- (5 - 8) hours Coverage</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Two Camera & Drone Cover In Shoot</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Full HD Quality Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}} variant='h5'><b>RS. 85 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>Extra :</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>16 GB Wooden Pen Drive With Wooden Box : Rs. 15 000/=</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>Project Service For Function Day( 2 hours ) : Rs. 25 000/=</Typography>
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
                    <Typography variant='h5' sx={{letterSpacing: 3, fontStyle: 'italic',fontFamily: 'Poppins'}}>
                        <b>PRE WEDDING SHOOT (4K QUALITY)</b>
                    </Typography>
                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>SILVER PACKAGE</Typography>
                    <br />
                    <Typography sx={{fontFamily: 'Poppins'}}>- (5 - 8) hours Coverage</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- One Camera Cover In Shoot</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- 4k Quality Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}} variant='h5'><b>RS. 55 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>GOLD PACKAGE</Typography>
                    <br />
                    <Typography sx={{fontFamily: 'Poppins'}}>- (5 - 8) hours Coverage</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- One Camera & Drone Cover In Shoot</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- 4k Quality Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}} variant='h5'><b>RS. 80 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>PLATINUM PACKAGE</Typography>
                    <br />
                    <Typography sx={{fontFamily: 'Poppins'}}>- (5 - 8) hours Coverage</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- Two Camera & Drone Cover In Shoot</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>- 4k Quality Video</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}} variant='h5'><b>RS. 100 000/=</b></Typography>

                    <Typography variant='h5' sx={{paddingTop:'20px',fontFamily: 'Poppins'}}>Extra :</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>16 GB Wooden Pen Drive With Wooden Box : Rs. 15 000/=</Typography>
                    <Typography sx={{fontFamily: 'Poppins'}}>Project Service For Function Day( 2 hours ) : Rs. 25 000/=</Typography>
                    </Grid>
                </Grid>

            </Grid>
            <ContactMe/>
        </Grid>
    )
}
