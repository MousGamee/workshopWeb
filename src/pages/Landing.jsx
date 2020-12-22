import React, { useState, useEffect, useContext} from 'react'
import './Home.css'
import bkg from '../images/afroNationCover.jpg'
import HomeCard from '../components/HomeCard'
import { FirebaseContext } from '../firebase'
import { Link } from 'react'

const Landing = () => {

    const firebase = useContext(FirebaseContext)

    const [homeClasse, setHomeClass] = useState([])
   
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
            
            <div className="landing mb-4" style={{ backgroundImage: `url(${bkg})`, backgroundPosition: 'center' }}>

            </div>

            <div className="currentClass">
                <div className="container">
                    <div className="row">

                        {
                            homeClasse.map(item => {
                                return(
                                     <HomeCard 
                                        key={item.id}
                                        title={item.title}
                                        studio={item.studio}
                                        teacher={item.teacher}
                                        description={item.description}
                                        genre={item.genres}
                                    />
                                )
                            })
                        }

                    </div>
                </div>

                <div className="recommandation">

                </div>
            </div> 
        </>
    )
}

export default Landing
