import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Conservation from './components/Conservation';
import About from './components/About';
import Contact from './components/Contact';
import Sponsor from './components/Sponsor';
import Acknowledgements from './components/Acknowledgements';
import Signup from './components/Signup';
import PetForm from './components/PetForm';
import SponsorForm from './components/SponsorForm';
import Login from './components/Login';
import SponsorLanding from './components/SponsorLanding';


export default class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/home' element = {<Home />}/>
          <Route path='/conservation' element = {<Conservation />}/>
          <Route path='/contact' element = {<Contact />}/>
          <Route path='/about' element = {<About />}/>
          <Route path='/sponsor' element = {<Sponsor />}/>
          <Route path='/acknowledgements' element = {<Acknowledgements />}/>
          <Route path='/signup' element = {<Signup />}/>
          <Route path='/newpet' element = {<PetForm />}/>
          <Route path='/newsponsor' element = {<SponsorForm />}/>
          <Route path='/login' element = {<Login />}/>
          <Route path='/signup' element = {<Signup />}/>
          <Route path='/sponsorlanding' element = {<SponsorLanding />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
    )
  }
}
