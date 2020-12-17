// import React, { Component, useEffect, useState } from 'react'
import { Container, Jumbotron } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css'
import './home.css'
const Home = () => {
  return (
    <>
      <div className="splash-image">
        <Container>
          {/* Hero Caption */}
          <div className="hero-caption">Get a van, get out of here</div>
        </Container>
      </div>
    </>
  )
}

export default Home
