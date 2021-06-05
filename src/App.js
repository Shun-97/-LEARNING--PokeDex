import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import {Home} from './pages'
import {Pokemon} from './pages'

function App() {
  return (
    //Best practice to put the main at the bottom
    <Router>
      <Route path = '/pokemon' component = {Pokemon}></Route>
      <Route path ='/' exact component={Home}></Route>
  </Router>
  );
}

export default App;
