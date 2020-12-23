import React, { useContext, useEffect} from 'react'
import { WorkshopContext } from '../firebase/workshopContext'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Searchbar = () => {

    const {query, setQuery,isSearch, setIsSearch } = useContext(WorkshopContext)

    const handleSubmit = e => {
        e.preventDefault()
        if(!isSearch){
            setIsSearch(true)
        }
    }

    const handleChange = e => {
       setQuery(e.target.value)
       if(query !== ''){
           setIsSearch(true)
       }
    }

    const handleBack = () => {
        setIsSearch(false)
        setQuery('')
    }


    useEffect (() => {
       
    },[])

    return (
        <form className="container-fluid d-flex align-items-center" onSubmit={handleSubmit}>
            <ArrowBackIcon style={{display : isSearch ? "inline-block" : "none", marginRight : 15}} role="button" onClick={handleBack}/>
            <input type="search" required className="form-control" placeholder="Cours, danse, event...?" value={query} onChange={handleChange}/>
        </form>
    )
}

export default Searchbar
