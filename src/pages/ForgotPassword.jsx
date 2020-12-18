import React from 'react'
import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'

const ForgotPassword = () => {
    return (
        <>
        <div>
            <Navbar />
            <MobileNavbar />
            <div className="container paddingNavbar">
                <div className="row d-flex justify-content-center mt-4">
                    <form className="col-lg-6">
                        <h2> Mot de passe oublié ? </h2>
                        <p className="text-center mt-4 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. oribus nesciunt soluta officiis quod quis est ipsa. Illo.</p>
                        <div className="mb-4">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" placeholder="email@mail.com"/> 
                        </div>
                        <button type="submit" className="btn btn-primary flex-fill"> Réinitialiser le mot de passe </button>
                    </form>
                </div> 
            </div>
        </div>
        </>
    )
}

export default ForgotPassword
