import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {


  return (
    <Router>
     <Routes>
     <Route path='/' element={ <Login/>} />
     <Route path='/home' element={ <Home/> } />
     </Routes>
    </Router>
  );
}

export default App;
