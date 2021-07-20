import './App.css';
import Home from './Home';
import Error from './Error'
import SingleRoom from './SingleRoom'
import Rooms from './Rooms'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rooms/' component={Rooms} />
          <Route exact path='/rooms/:slug' component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>


  );
}

export default App;
