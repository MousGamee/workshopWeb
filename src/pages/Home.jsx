import React, { useState } from 'react'
import Footer from '../components/Footer'
import MobileSearchbar from '../components/MobileSearchbar'
import Navbar from '../components/Navbar'
import './Home.css'
import bkg from '../images/afroNationCover.jpg'
import HomeCard from '../components/HomeCard'


const Home = () => {
    const [userSession, setUserSession] = useState(true)

    return (
        <>
         <Navbar />
         <MobileSearchbar />
       
        <div className="landing mb-4" style={{backgroundImage : `url(${bkg})`, backgroundPosition : 'center'}}>
        </div>

        <div className="currentClass">
            <div className="container">
                <div className="row">
                
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />

                </div>
            </div>
        </div>

        <div className="recommandation">
            
        </div>
        <Footer />
        </>
    )
}

export default Home
