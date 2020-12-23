import React,{ useContext, useState, useEffect } from 'react'
import HomeCard from '../components/HomeCard'
import { FirebaseContext } from '../firebase'
import { WorkshopContext } from '../firebase/workshopContext'

const SearchResult = () => {

    const { query } = useContext(WorkshopContext)
    const firebase = useContext(FirebaseContext)
    const [resultClasse, setResultClasses] = useState([])

    const getResultClasses = () => {
        firebase.cours().onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setResultClasses(items) 
            console.log(resultClasse)
        })
    }

    useEffect(() => {
       getResultClasses()
       console.log(resultClasse)
    }, []);

    return (
        <div className="container paddingNavbar">
            <div className="row">
                {
                    resultClasse.filter((val) => {
                        if(query === ''){
                            return val
                        } else if(val.title.toLowerCase().includes(query.toLowerCase()) || val.teacher.toLowerCase().includes(query.toLowerCase())  ){
                            return val
                        }
                    })
                        .map((item) => {
                        return(
                            <HomeCard 
                            key={item.id}
                            title={item.title}
                            studio={item.studio}
                            teacher={item.teacher}
                            description={item.description}
                            genre={item.genres}
                        />    
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchResult
