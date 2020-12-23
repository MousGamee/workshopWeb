import React, { useEffect, useContext } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from './pages/SignIn';
import Page404 from './pages/Page404';
import SignUp from './pages/SignUp';
import Favoris from './pages/Favoris';
import ForgotPassword from './pages/ForgotPassword';
import Profil from './pages/Profil';
import { FirebaseContext } from './firebase';
import { WorkshopContext } from './firebase/workshopContext';
import ClasseDetails from './pages/ClasseDetails';


const App = () => {

  const firebase = useContext(FirebaseContext)
  const {userSession, setUserSession, setUserData } = useContext(WorkshopContext)
  
  useEffect(() => {
    let listner = firebase.auth.onAuthStateChanged(user => {
        user ? setUserSession(user) : setUserSession(null)
    })

    if(!!userSession ){
        firebase.user(userSession.uid)
        .get()
        .then(doc => {
            if(doc && doc.exists){
                const myData = doc.data()
                setUserData(myData)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
   
    return () => {
        listner()
    }
}, [userSession])

  return (
    <> 
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Connection" component={SignIn} />
          <Route path="/Inscritpion" component={SignUp} />
          <Route path="/Favoris" component={Favoris} />
          <Route path="/Profil" component={Profil} />
          <Route path="/:id" component={ClasseDetails} />
          <Route path="/Mot-de-passe-oublie" component={ForgotPassword} />
          <Route component={Page404} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
