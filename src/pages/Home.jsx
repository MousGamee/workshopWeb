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

            <div className="landing mb-4" style={{ backgroundImage: `url(${bkg})`, backgroundPosition: 'center' }}>
            </div>

            <div className="currentClass">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 classCard shadow rounded">
                            <img src="img/image1.jpg" className="img-fluid" alt="" />
                            <div className="description">
                                <h3 className="title">Ma classe</h3>
                                <span className="h5">Teacher</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio sed digvoluptatibus iure in consequuntur quae architecto maiores cumque odio quibusdam debitis? Qui nesciunt excepturi cum repudiandae, saepe iure.</p>
                            </div>
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
