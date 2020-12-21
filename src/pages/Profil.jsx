import React, { useContext, useEffect, useState } from 'react'
import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import HomeIcon from '@material-ui/icons/Home';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { FirebaseContext } from '../firebase'
import './Profil.css'

const Profil = (props) => {
    const firebase = useContext(FirebaseContext)
    const [userSession, setUserSession] = useState(null)

    const handleClick = () => {
        firebase.logOutUser()
    }
    useEffect(() => {
        let listner = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/')
        })

        return () => {
            listner()
        }
    }, [])

    return (
        <>
            <Navbar />
            <MobileNavbar />
            <div className="container">
                <div className="paddingNavbar">
                    <div className="row mt-4">
                        <div className="col-lg-3 col-md-4 profil-section border rounded-3 p-2 d-flex flex-column">
                            <div className="image-section align-self-center mb-4 mt-4">
                                <img className="rounded-circle"src="./img/profil.jpg" alt=""/>
                                <p className="mt-2">mettre a jour la photo</p>
                            </div>
                            <div className="d-flex align-items-center mb-2"><StarOutlineIcon  style={{ fontSize: 30, marginRight : 10 }}/> <p className="m-0">10 classes favoris</p></div>

                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="mt-3">
                                <h2>Bonjour, moi c'est UserName</h2>
                                <p>Membre depuis userDate</p>
                                <p>Modifier le profil</p>
                                <p className="h4">A propos de</p>
                                <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam velit quaerat hic laboriosam et, doloremque rem reiciendis nisi ipsum animi consequatur natus recusandae eaque sint quibusdam voluptas consequuntur cupiditate cumque.</p>
                                <div className="d-flex align-items-center mb-2"><HomeIcon  style={{ fontSize: 30, marginRight : 10 }}/> <p className="m-0">Habite à Paris, userPostion</p></div>
                                <div className="d-flex align-items-center mb-4"><ChatBubbleIcon style={{ fontSize: 30, marginRight : 10 }}/> <p className="m-0">Langues : Anglais, Francais</p></div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
        </>
    )
}

export default Profil
