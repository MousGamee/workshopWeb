import React, { useEffect, useContext, useState } from 'react'
import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import './Favoris.css'
import { Link } from 'react-router-dom'
import PopularCard from '../components/PopularCard'
import { FirebaseContext } from '../firebase'

const Favoris = () => {
  const firebase = useContext(FirebaseContext)
  const [userSession, setUserSession] = useState(null)

  useEffect(() => {
    let listner = firebase.auth.onAuthStateChanged(user => {
      user ? setUserSession(user) : setUserSession(null)
    })
    return () => {
      listner()
    }
  }, [])
  return (
    <>
      <MobileNavbar />
      <Navbar />
      <div className="container">
        <div className="d-flex flex-column paddingNavbar">
          {
            userSession ? (
              <>
                <h2>Ma liste</h2>
                <hr />
              </>
            ) : (
                <>
                  <h2>Enregistrés</h2>
                  <Link to='/Connection'><button className="btn btn-secondary mt-2">Connexion</button></Link>
                  <hr />
                </>
              )
          }
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
