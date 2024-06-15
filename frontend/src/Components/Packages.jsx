import { Grid, Typography } from '@mui/material'
import React from 'react'
import NavBar from './NavBar2'

export default function Packages() {
    return (
        <Grid>
            <NavBar />
            <Grid className='container' sx={{paddingTop: '20px'}}>
                <center>
                    <Typography variant='h5' sx={{color: '#42763D', letterSpacing: 3}}><b>OUR PACKAGERS</b></Typography>
                    <p>
                        Capture your cherished moments with our videography packages. Whether it's a wedding, corporate event,
                        or personal milestone, we offer services to suit your needs and budget. Each package provides high-quality,
                        cinematic video content that tells your unique story. Find the perfect fit for your next occasion.
                    </p>
                </center>
            </Grid>
        </Grid>
    )
}
