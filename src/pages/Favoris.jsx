import React from 'react'
import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import './Favoris.css'
import { Link } from 'react-router-dom'
import PopularCard from '../components/PopularCard'

const Favoris = () => {
    return (
        <>
         <MobileNavbar />
         <Navbar />
          <div className="container">
              <div className="d-flex flex-column paddingNavbar">
                <h2>Enregistrés</h2>
                <Link to='/Connection'><button className="btn btn-secondary mt-2">Connexion</button></Link>
                <hr/>
              </div> 
              <div className="container">
                <h5 className="mt-2 mb-4">Cours Populaires</h5>
                  <div className="row">
                    <PopularCard />
                    <PopularCard />
                    <PopularCard />
                    <PopularCard />
                    <PopularCard />
                    <PopularCard />
                  </div>
              </div>

          </div>
        </>
    )
}

export default Favoris
