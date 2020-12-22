import React,{ useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../firebase'

const SearchResult = () => {

    const firebase = useContext(FirebaseContext)
    const [resultClasse, setResultClasses] = useState([])

    const row = []

    useEffect(() => {
       
    }, []);

    return (
        <div className="container paddingNavbar">
            resultat de la recherche
        </div>
    )
}

export default SearchResult
