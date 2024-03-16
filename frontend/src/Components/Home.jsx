import React from 'react'
import {useDispatch} from 'react-redux' ;
import {useNavigate,Link} from 'react-router-dom'
import "./loginsignup"
const Home = () => {
 const navigate= useNavigate()
  return (
    <div className='form_container'>
    <div className='form_sub_container'>
        <h1> Welcome to Home</h1>
        <Link to='/allUsers'> Get all users Deytail </Link>
        <Link to='/login' > Login The Page</Link>
    </div>
    </div>
  )
}

export default Home