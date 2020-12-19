import React, { useState, useContext } from 'react'
import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import { FirebaseContext } from '../firebase';

const ForgotPassword = (props) => {

    const firebase = useContext(FirebaseContext);
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [succes, setSucces] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        firebase.forgotPassword(email)
            .then(res => {
                setError(null)
                setSucces(`un mail a été envoyé a ${email}`)
                setEmail('')
                setTimeout(() => {
                    props.history.push('/Connection')
                }, 5000)
            })
            .catch(error => {
                setError(error)
                setEmail('')
            })

    }
    const disabled = email === "";
    return (
        <>
            <div>
                <Navbar />
                <MobileNavbar />
                <div className="container paddingNavbar">
                    <div className="row d-flex justify-content-center mt-4">
                        <form className="col-lg-6" onSubmit={handleSubmit}>
                            <h2> Mot de passe oublié ? </h2>
                            {
                                succes == '' ? (
                                    <>
                                        {error && <div class="alert alert-danger" role="alert">{error.message}</div>}
                                        <p className="text-center mt-4 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. oribus nesciunt soluta officiis quod quis est ipsa. Illo.</p>
                                        <div className="mb-4">
                                            <label className="form-label">Email</label>
                                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className="form-control" placeholder="email@mail.com" required />
                                        </div>
                                        <button disabled={disabled} type="submit" className="btn btn-primary flex-fill"> Réinitialiser le mot de passe </button>
                                    </>) : (
                                        <div className="alert alert-success" role="alert">
                                            {succes}
                                        </div>
                                    )
                            }

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
