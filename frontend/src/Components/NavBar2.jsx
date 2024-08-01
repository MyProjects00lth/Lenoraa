import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import logo from './img/logo.png';

export default function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    { href: '/#home', label: 'HOME' },
    { href: '/#', label: 'GALLERY' },
    { href: '/#aboutme', label: 'ABOUT ME' },
    { href: '/#contactme', label: 'CONTACT ME' },
  ];

  return (
    <Grid style={{ backgroundColor: '#EAFFEA' }}>
      <Container sx={{ paddingTop: '10px', paddingBottom: '20px' }}>
        <center>
          <a href='/'>
            <img src={logo} style={{ width: '150px' }} alt="Logo" />
          </a>
          <div className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', flexDirection: isMobile ? 'column' : 'row' }}>
            <ul style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', listStyle: 'none', padding: 0, margin: 0 }}>
              {links.map((link, index) => (
                <li key={link.label} className="nav-item" style={{ margin: isMobile ? '10px 0' : '0 15px' }}>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={link.href}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontFamily: 'Poppins',
                      fontWeight: hoveredIndex === index ? 'bold' : 'normal',
                      transition: 'font-weight 0.20s ease',
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </center>
      </Container>
    </Grid>
  );
}
