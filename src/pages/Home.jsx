import React, { useContext, useState } from 'react'
import MobileSearchbar from '../components/MobileSearchbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


import Landing from './Landing'
import { WorkshopContext } from '../firebase/workshopContext'
import SearchResult from './SearchResult'

const Home = () => {
    const {isSearch } = useContext(WorkshopContext)
    const [showNavbar,setShowNavbar] = useState(true)
    
    return ( 
        <>
        <Navbar showNavbar={showNavbar}/>
        <MobileSearchbar/>
            {
                isSearch ? (
                    <SearchResult />
                ) : ( 
                    <Landing />
                )
            }
        
        <Footer />
        </>
    )
}

export default Home
