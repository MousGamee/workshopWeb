import React, { useContext, useState, useEffect } from 'react'
import Footer from '../components/Footer'
import MobileSearchbar from '../components/MobileSearchbar'
import Navbar from '../components/Navbar'
import './Home.css'
import bkg from '../images/afroNationCover.jpg'
import HomeCard from '../components/HomeCard'
import { FirebaseContext } from '../firebase'


const Home = () => {
    
    const [userSession, setUserSession] = useState(true)
    const firebase = useContext(FirebaseContext)

    useEffect(() => {

        return () => {
            
        }

    }, [])

    return (
        <>
            <Navbar />
            <MobileSearchbar />

            <div className="landing mb-4" style={{ backgroundImage: `url(${bkg})`, backgroundPosition: 'center' }}>

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

                <div className="recommandation">

                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home
