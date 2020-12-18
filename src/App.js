import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from './pages/SignIn';
import Page404 from './pages/Page404';
import SignUp from './pages/SignUp';
import Favoris from './pages/Favoris';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <> 
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Connection" component={SignIn} />
          <Route path="/Inscritpion" component={SignUp} />
          <Route path="/Favoris" component={Favoris} />
          <Route path="/Mot-de-passe-oublie" component={ForgotPassword} />
          <Route component={Page404} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
