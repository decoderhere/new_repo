import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import LoginSignup from './Components/loginsignup';
import Allusers from './Components/Allusers';
import Home from './Components/Home';
import { UserTable } from './Components/UserTable';


function App() {
  return (
    
    <Router>
      <Routes>
           <Route path='/'  element ={<Home />} /> 
           <Route path='/users'  element ={<UserTable />} /> 
          < Route path='/login' element={<LoginSignup />} /> 
          <Route path ='/allUsers' element ={<Allusers />} />
      </Routes>
    </Router>
    )
} 

export default App;