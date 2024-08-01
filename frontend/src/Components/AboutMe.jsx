import { Grid, Typography } from '@mui/material'
import React from 'react'
import profileimg from './img/sanka.jpg'

export default function AboutMe() {
    return (
        <Grid className='container' id='aboutme'>
            <center>
                <Grid>
                    <Typography variant='h5' sx={{ color: '#42763D', letterSpacing: 3, paddingTop: '50px', fontFamily: 'Poppins'}}><b>ABOUT ME</b></Typography>
                    <Grid sx={{ paddingTop: '50px' }}>
                        <img src={profileimg} alt='profileimg' style={{ width: '300px', height: '300px', borderRadius: '400px' }} />
                    </Grid>
                    <Typography
                        variant="h3"
                        sx={{
                            paddingTop: '20px',
                            fontFamily: 'Italianno, Arial, sans-serif',
                        }}
                    >
                        Madhushanka Yomal
                    </Typography>
                    <Typography variant='h6' sx={{fontFamily: 'Poppins'}}>
                        <b>Professional Videographer & Cinematographer</b>
                    </Typography>
                    <Typography sx={{width: '90%', paddingBottom: '50px', fontFamily: 'Poppins'}}>
                        With a passion for visual storytelling and a wealth of experience in the industry, Madhushanka Yomal is your go-to professional for all
                        things video production. As a skilled cinematographer and digital creator, Madhushanka brings a unique blend of creativity and
                        technical expertise to every project. With a keen eye for detail and a commitment to excellence, he consistently
                        delivers stunning visuals that captivate audiences and elevate brands. From concept development to
                        final delivery, Madhushanka's dedication to his craft shines through in every frame. Whether
                        you need a production manager to oversee your next big project or a talented videographer to
                        bring your vision to life, Madhushanka Yomal has the skills and experience to make it
                        happen. Explore his portfolio to see examples of his work and discover why
                        clients trust him to bring their stories to life.
                    </Typography>
                </Grid>
            </center>
        </Grid>
    )
}
