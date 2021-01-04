import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container pt-4">
                <div className="row">
                    <div className="col-md-10">
                    <p className="copyright">© 2020 Workshop, All rights reserved</p>

                    <ul className="d-flex flex-column">
                        <li><Link>Confidentialité</Link></li>
                        <li><Link>Conditions</Link></li>
                        <li><Link>Plan du site</Link> </li>
                        <li><Link>Fonctionnement du site</Link></li>
                        <li><Link>Informations sur l'entreprise</Link></li>
                    </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className="d-flex">
                            <li><Link><FacebookIcon/></Link></li>
                            <li><Link><InstagramIcon /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
