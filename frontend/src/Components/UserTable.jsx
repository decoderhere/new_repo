import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const UserTable = () => {

    const {users}= useSelector ((state)=> state.getAllStudents.allUsers.data)
    console.log("mydata",users)
   

  return (

    <div>
        <div>
           <table>
            <tr>
              <th>Name</th>
              <th> Email</th>
              <th> Address</th>
            </tr>
            {
              users && users.map ((item)=> (
                <tr> 
                  <td> {item.name}</td>
                  <td>{item.email}</td>
                  <td> Kushak{item.name}{item.email}</td>
                </tr>
              ))
            }
           
           </table>
        </div>
    </div>
  )
}
