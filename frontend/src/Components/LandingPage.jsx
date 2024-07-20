import React, { useRef } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Gallery from './Gallery';
import ContactMe from './ContactMe';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function LandingPage() {
  const scrollRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box minHeight="100vh" position="relative">
      <NavBar />
      <Home />
      <Gallery/>
      <AboutMe />
      <ContactMe />
      <div ref={scrollRef}></div>
      <Box
        position="fixed"
        bottom={20}
        right={20}
        zIndex={1000}
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
      >
        <IconButton
          aria-label="Scroll to Top"
          onClick={scrollToTop}
          style={{ color: '#EAFFEA'}}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
