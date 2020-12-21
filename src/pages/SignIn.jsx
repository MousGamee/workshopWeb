import React, { useState, useContext, useEffect } from 'react'
import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../firebase'

const SignIn = (props) => {

    const firebase = useContext(FirebaseContext)
    const [email, setEmail] = useState('')
    const [mdp, setMdp] = useState('')
    const [btn, setBtn] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if (mdp !== '' && email !== '') {
            setBtn(true)
        } else if (mdp == '' && email == '') {
            setBtn(false)
        }
    }, [email, mdp])

    const handleSubmit = e => {
        e.preventDefault()
        firebase.logInUser(email, mdp)
            .then(user => {
                setEmail('')
                setMdp('')
                props.history.push('/')
            })
            .catch(error => {
                setEmail('')
                setMdp('')
                setError(error.message)
            })
    }

    //erreur lors de l'envoie
    const errorMsg = error !== '' && <div className="alert alert-danger" role="alert">{error}</div>

    return (
        <>
            <div>
                <Navbar />
                <MobileNavbar />
                <div className="container paddingNavbar">
                    <div className="row d-flex justify-content-center mt-4">
                        <form className="col-lg-6" onSubmit={handleSubmit}>
                            <h2> Connexion </h2>
                            {errorMsg}
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="text" id="emai" value={email} className="form-control" placeholder="email@mail.com" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mot de passe</label>
                                <input onChange={(e) => setMdp(e.target.value)} type="password" id="password" value={mdp} className="form-control" required />
                            </div>

                            {btn ? (<button type="submit" className="btn btn-primary flex-fill" > Se connecter </button>) : (<button type="submit" className="btn btn-primary flex-fill" disabled> Se connecter </button>)} <br />
                            <Link to="/Mot-de-passe-oublie" className="d-block mt-3 mb-3"> Mot de passe oublié ?</Link>
                            <p>Vous n'avez pas de compte ? <Link to="/Inscritpion">Inscription</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn
