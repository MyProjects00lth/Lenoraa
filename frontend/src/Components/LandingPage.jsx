import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'

export default function LandingPage() {
  return (
    <div>
        <NavBar/>
        <Home/>
        <AboutMe/>
        <ContactMe/>
    </div>
  )
}
