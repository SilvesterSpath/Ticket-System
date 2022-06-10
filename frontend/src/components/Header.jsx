import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <div className="logo">
        <Link to='/'>Support Desk</Link>
      </div>
      <ul>
        <li>
          <Link to='/login'>
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <FaUser /> Register
          </Link>
        </li>
{/*         <li>
          <Link to='/'>
            <FaSignOutAlt /> SignOut
          </Link>
        </li> */}
        
      </ul>
    </header>
  )
}

export default Header