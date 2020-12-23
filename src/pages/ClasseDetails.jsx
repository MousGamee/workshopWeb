import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import MobileSearchbar from '../components/MobileSearchbar'
import Navbar from '../components/Navbar'
import { FirebaseContext } from '../firebase'
import './ClasseDetails.css'

const ClasseDetails = ({match}) => {


    const [detailClasse, setDetailClasse] = useState({})
    const firebase = useContext(FirebaseContext)
    const getClasseDetails = () => {
        firebase.getClasseDetails(match.params.id)
            .get()
            .then(doc => {
                if(doc && doc.exists){
                    const myData = doc.data()
                    console.log(myData)
                    setDetailClasse(myData)
                }
            })
    }
    useEffect(() => {
      getClasseDetails()
    }, [])

    return (
        <>
            <Navbar />
            <MobileSearchbar/>
            <div className="container paddingNavbar">
                <p>{detailClasse.title}</p>
            </div>
            <Footer />
            
        </>
    )
}

export default ClasseDetails
