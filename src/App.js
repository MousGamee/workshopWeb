import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from './pages/SignIn';
import Page404 from './pages/Page404';
import SignUp from './pages/SignUp';


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Connection" component={SignIn} />
          <Route path="/Inscritpion" component={SignUp} />
          <Route component={Page404} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
