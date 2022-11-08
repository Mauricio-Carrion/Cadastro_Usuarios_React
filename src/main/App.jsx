/* eslint-disable import/no-anonymous-default-export */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../components/Logo/Logo'
import Nav from '../components/Nav/Nav'
import Home from '../components/Home/Home'
import Footer from '../components/Footer/Footer'

export default props =>
  <div className="app">
    <Logo />
    <Nav />
    <Home />
    <Footer />
  </div>
