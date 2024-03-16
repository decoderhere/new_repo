import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllStudents } from '../Reducers/loginReducer'
import { getallusers } from '../Actions/loginsignp'
import {Link} from 'react-router-dom'
const Allusers = () => { 

    const dispatch= useDispatch()

    useEffect (()=>{
        dispatch(getallusers())
    },[])

  return (
    <div>
    <div>Allusers</div>
    <Link to='/users'> Users</Link>
    </div>
  )
}

export default Allusers