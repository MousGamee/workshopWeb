import React, { useContext, useEffect, useState } from 'react'
import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import HomeIcon from '@material-ui/icons/Home';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { FirebaseContext } from '../firebase'
import { WorkshopContext } from '../firebase/workshopContext'
import './Profil.css'

const Profil = (props) => {
    const firebase = useContext(FirebaseContext)
    const { userData } = useContext(WorkshopContext)
    const [userSession, setUserSession] = useState(null)
    const [description, setdescription] = useState(userData.description)
   
    const [isEdit, setIsEdit] = useState(false)

    const handleClick = () => {
        firebase.logOutUser()
    }
    const editProfil = () => {
        if(!!userSession){
            firebase.user(userSession.uid)
        .get()
        .then(doc =>{
            if(doc && doc.exists){
                const myData = doc.data()
                console.log(myData.description)
                //trouver comment modifier une valeur
            }
        })
        .catch(error => {
            console.log(error)
        })
        }

    }

    useEffect(() => {
        let listner = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/')
        })           
        return () => {
            listner()
        }
    }, [userSession])
    

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
                                <h2>Bonjour, moi c'est {userData.name}</h2>
                                <p>Membre depuis userDate</p>
                                <p role="button" onClick={() => setIsEdit(true)} >Modifier le profil</p>
                                <p className="h4">A propos de</p>
                                <p className="fs-6 mb-4" style={{display : isEdit ? 'none' : 'block' }}>{description == ''? 'aucune description' : description}</p>
                                
                                <div class="form-floating" style={{display : isEdit ? 'block' : 'none' }}>
                                    <textarea className="form-control" placeholder="description" id="floatingTextarea" value={description} onChange={(e) => setdescription(e.target.value)} ></textarea>
                                    <label for="floatingTextarea">Decris toi en quelques mots...</label>
                                </div>

                                <div className="d-flex align-items-center mb-3"><HomeIcon  style={{ fontSize: 30, marginRight : 10 }}/> <p className="m-0">Habite à Paris, userPostion</p></div>
                                <div className="d-flex align-items-center mb-4"><ChatBubbleIcon style={{ fontSize: 30, marginRight : 10 }}/> <p className="m-0">Langues : Anglais, Francais</p></div>
                                <div className="d-flex justify-content-between" >
                                    <button className="btn btn-primary" style={{display : isEdit ? 'block' : 'none' }} onClick={editProfil}> Enregistrer </button>
                                    <button className="btn btn-secondary" style={{display : isEdit ? 'block' : 'none' }} onClick={() => setIsEdit(false)}> Annuler </button>
                                </div>
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
