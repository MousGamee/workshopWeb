import React, { useContext, useEffect} from 'react'
import { WorkshopContext } from '../firebase/workshopContext'

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
       console.log(query.length)
       if(query === '') {
           setIsSearch(false)
       }
    }

    useEffect (() => {
        console.log(query)
    },[query])

    return (
        <form className="container-fluid" onSubmit={handleSubmit}>
            <input type="search" required className="form-control" placeholder="Cours, danse, event...?" value={query} onChange={handleChange}/>
        </form>
    )
}

export default Searchbar
