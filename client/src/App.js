// import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Conservation from './pages/Conservation';
import About from './pages/About';
import Contact from './pages/Contact';
import Sponsor from './pages/Sponsor';
import Acknowledgements from './pages/Acknowledgements';
import Signup from './pages/Signup';
import PetForm from './forms/PetForm';
import SponsorForm from './forms/SponsorForm';
import Login from './pages/Login';
import Tiers from './pages/Tiers';
import PetDetailsPage from './pages/PetDetailsPage';


function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/conservation' element={<Conservation />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/acknowledgements' element={<Acknowledgements />} />
          <Route path='/newpet' element={<PetForm />} />
          <Route path='/newsponsor' element={<SponsorForm />} />
          <Route path='/tiers' element={<Tiers />} />
          {/* <Route
            path='/sponsor'
            element={user ? <Sponsor /> : <Navigate to="/login" />} /> */}
          <Route path='/sponsor' element={<Sponsor />} />
          {/* <Route
            path='/sponsor/pet/:id'
            element={user ? <PetDetailsPage /> : <Navigate to="/login" />} /> */}
          <Route path='/sponsor/pet/:id' element={<PetDetailsPage />} />
          <Route
            path='/signup'
            element={!user ? <Signup /> : <Navigate to="/login" />} />
          <Route
            path='/login'
            element={!user ? <Login /> : <Navigate to="/login" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );

}

export default App;
