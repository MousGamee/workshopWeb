import React, { useContext, useState, useEffect } from 'react'
import Footer from '../components/Footer'
import MobileSearchbar from '../components/MobileSearchbar'
import Navbar from '../components/Navbar'
import './Home.css'
import bkg from '../images/afroNationCover.jpg'
import HomeCard from '../components/HomeCard'
import { FirebaseContext } from '../firebase'


const Home = () => {
    
    const firebase = useContext(FirebaseContext)
    const [homeClasse, setHomeClass] = useState([])
   
    const [showNavbar,setShowNavbar] = useState(true)

    const getHomeClasses = () => {
        firebase.cours().onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setHomeClass(items) 
            console.log(homeClasse)
        })
    }
    useEffect(() => {
    
        getHomeClasses()

    }, [])

    return ( 
        <>
            <Navbar showNavbar={showNavbar}/>
            <MobileSearchbar />

            <div className="landing mb-4" style={{ backgroundImage: `url(${bkg})`, backgroundPosition: 'center' }}>

            </div>

            <div className="currentClass">
                <div className="container">
                    <div className="row">

                        {
                            homeClasse.map(item => {
                                return(
                                    <HomeCard 
                                        title={item.title}
                                        studio={item.studio}
                                        teacher={item.teacher}
                                        description={item.description}
                                    />
                                )
                            })
                        }

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
