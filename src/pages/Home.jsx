import React from 'react'
import Footer from '../components/Footer'
import MobileSearchbar from '../components/MobileSearchbar'
import Navbar from '../components/Navbar'
import './Home.css'
import bkg from '../images/afroNationCover.jpg'


const Home = () => {
    return (
        <>
         <Navbar />
         <MobileSearchbar />

        <div className="landing" style={{backgroundImage : `url(${bkg})`, backgroundPosition : 'center'}}>
        </div>

        <div className="currentClass">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 classcard">
                        <img src="img/image1.jpg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-3 classcard">
                        <img src="img/image1.jpg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-3 classcard">
                        <img src="img/image1.jpg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-3 classcard">
                        <img src="img/image1.jpg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-3 classcard">
                        <img src="img/image1.jpg" className="img-fluid" alt=""/>
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
