import './App.css';
import Navbar from "./components/navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styling/AppScss.scss';

function App() {  
  return (
   
<div className="App">
  <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
           welcome to home page
          </Route>
          <Route path="/addorder">
           Add order
          </Route>
          <Route path="/myorders">
            lost of orders
          </Route>
        </Switch>
  </Router>
 
</div>
    
  );
}

export default App;
