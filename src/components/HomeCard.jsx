import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WorkshopContext } from '../firebase/workshopContext'
import './HomeCard.css'


const HomeCard = ({ title, description, teacher, studio, genre, key, id }) => {
    
    const { genres } = useContext(WorkshopContext)

    return (
        <Link to={`/${id}`} className="homeCard col-12 col-md-6 col-lg-4 classCard mb-2 rounded bg-white"> 
        <div className="" onClick={() => console.log(id)}>
            <img src="img/image1.jpg" className="img-fluid p-1" alt="" />
            <div className="description p-2">
                <div className="d-flex align-items-center justify-content-between">
                    <h4 className="title primary">{title}</h4>
                    <span className="h5">{teacher}</span>
                </div>
                <span className="h6">{studio}</span>
                <div className="categories mt-1 mb-2">
                    {
                        genre.map((item) => {
                            return(
                            <span class="badge bg-light text-dark mr-2">{genres[item]}</span>
                            )
                        })
                    }
                </div>
                <p className="mt-2">{description}</p>
            </div>
        </div>
        </Link>

    )
}

export default HomeCard
