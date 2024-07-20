import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import logo from './img/logo.png';

export default function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid style={{ backgroundColor: '#EAFFEA'}}>
      <Container sx={{ paddingTop: '10px', paddingBottom: '50px' }}>
        <center>
        <a href='/'>
        <img src={logo} style={{ width: '150px' }} alt="Logo" />
        </a>
          <div className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', flexDirection: isMobile ? 'column' : 'row' }}>
            <ul style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', listStyle: 'none', padding: 0, margin: 0 }}>
              <li className="nav-item" style={{ margin: isMobile ? '10px 0' : '0 15px' }}>
                <a className="nav-link active" aria-current="page" href="#home" style={{textDecoration: 'none', color: 'black'}}>HOME</a>
              </li>
              <li className="nav-item" style={{ margin: isMobile ? '10px 0' : '0 15px' }}>
                <a className="nav-link active" aria-current="page" href="#gallery" style={{textDecoration: 'none', color: 'black'}}>GALLERY</a>
              </li>
              <li className="nav-item" style={{ margin: isMobile ? '10px 0' : '0 15px' }}>
                <a className="nav-link active" aria-current="page" href="#aboutme" style={{textDecoration: 'none', color: 'black'}}>ABOUT ME</a>
              </li>
              <li className="nav-item" style={{ margin: isMobile ? '10px 0' : '0 15px' }}>
                <a className="nav-link active" aria-current="page" href="#contactme" style={{textDecoration: 'none', color: 'black'}}>CONTACT ME</a>
              </li>
            </ul>
          </div>
        </center>
      </Container>
    </Grid>
  );
}