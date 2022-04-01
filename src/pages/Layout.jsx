import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import '../App.scss'

const Layout = () => {
  return (
      <>
      <div  style={{width:'300px',display:'flex',justifyContent:'space-between'}}>
         <Link to={'/'}>Home</Link>  
         <Link to={'/chats'}>Chats</Link>
         <Link to={'/profile'}>Profile</Link>
        
        </div>
        <div>
            <Outlet/>
        </div>
</>
  )
}

export default Layout