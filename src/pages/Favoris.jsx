import React from 'react'
import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Favoris = () => {
  return (
    <>
      <MobileNavbar />
      <Navbar />
      <div className="mt-4 container">
        <div className="d-flex flex-column">
          <h2>Enregistrés</h2>
          <Link to='/Connection'><button className="btn btn-secondary mt-2">Connexion</button></Link>
          <hr />
        </div>
      </div>
    </>
  )
}

export default Favoris
