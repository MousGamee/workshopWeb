import React from 'react'
import Footer from '../components/Footer'
import MobileSearchbar from '../components/MobileSearchbar'
import Navbar from '../components/Navbar'
import './Home.css'

const Home = () => {
    return (
        <>
         <Navbar />
         <MobileSearchbar />
        <div className="landing">
           
        </div>
        <div className="currentClass">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 classcard">

                    </div>
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
