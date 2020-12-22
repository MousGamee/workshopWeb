import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {    
        apiKey: "AIzaSyDRWnp3x-FaYL8VDBmB0tQS4Ry1ZUnQEPE",
        authDomain: "workshop-76db5.firebaseapp.com",
        databaseURL: "https://workshop-76db5.firebaseio.com",
        projectId: "workshop-76db5",
        storageBucket: "workshop-76db5.appspot.com",
        messagingSenderId: "698534577945",
        appId: "1:698534577945:web:5e68806b462a9bae72a788",
        measurementId: "G-NQJ49F42XL"  
}

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
        this.db = app.firestore()
        this.storage = app.storage()
    }

    //inscription
    singUpUser = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password)
        
    //connexion
    logInUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password)

    //deconnexion
    logOutUser = () => this.auth.signOut()

    //mot de passe oublié
    forgotPassword = email => this.auth.sendPasswordResetEmail(email)

    user = uid => this.db.doc(`Users/${uid}`)
    
    cours = () => this.db.collection('Cours')

    getImage = url => this.storage.ref(url)
}

export default Firebase