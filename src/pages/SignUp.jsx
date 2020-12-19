import React, { useState, useContext } from 'react'
import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../firebase'

const SignUp = (props) => {

    const firebase = useContext(FirebaseContext)
    const data = {
        name: '',
        email: '',
        mdp: '',
        confirmMdp: ''
    }

    const [userData, setUserData] = useState(data)
    const [error, setError] = useState('')
    console.log(userData)

    const handleChange = e => {
        setUserData({ ...userData, [e.target.id]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { email, mdp, name } = userData
        firebase.singUpUser(email, mdp)
            .then(authUser => {
                return firebase.user(authUser.user.uid).set({
                    name,
                    email
                })
            })
            .then(() => {
                setUserData({ ...data })
                props.history.push('/')
            })
            .catch(error => {
                setError(error)
                setUserData({ ...data })
            })
    }

    const { name, email, mdp, confirmMdp } = userData

    //erreur lors de l'envoie
    const errorMsg = error !== '' && <div className="alert alert-danger" role="alert">{error.message}</div>
    return (
        <>
            <div>
                <Navbar />
                <MobileNavbar />
                <div className="container paddingNavbar">
                    <div className="row d-flex justify-content-center mt-4">
                        <form className="col-lg-6" onSubmit={handleSubmit}>
                            <h2> Inscription </h2>
                            {errorMsg}
                            <div className="mb-3">
                                <label className="form-label">Nom</label>
                                <input onChange={handleChange} value={name} type="text" id="name" className="form-control" placeholder="Mon nom" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input onChange={handleChange} value={email} type="text" id="email" className="form-control" placeholder="email@mail.com" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mot de passe</label>
                                <input onChange={handleChange} value={mdp} type="password" id="mdp" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirmez le mot de passe</label>
                                <input onChange={handleChange} value={confirmMdp} type="password" id="confirmMdp" className="form-control" required />
                            </div>
                            <button type="submit" className="btn btn-primary flex-fill"> S'inscrire </button> <br />
                            <p className="mt-3">Déja un compte ? <Link to="/Connection">Se connecter</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
