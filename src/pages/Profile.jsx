import { BoyRounded } from '@mui/icons-material';
import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {

  const contacts=useSelector((state)=>{
      return state.contacts
  })
  const isActive=useSelector(state=>{
    return state.isActive
  })
  return (
    <div>
        <h1>Profile page</h1>
        {contacts.map((contact)=>(
          <li key={contact.name}>
            {contact.name}
          </li>
          
        ))}
        <input type='checkbox' checked={isActive}/>
        
    </div>
  )
}

export default Profile