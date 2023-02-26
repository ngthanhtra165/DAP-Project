import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome , FaCheck , FaBookOpen } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className='Nav'>
        <h1>  Writing 9 </h1>
        <ul>
            
            <li><Link to = '/'> <FaHome /> Home</Link> </li>
            <li> <Link to = 'score'> <FaCheck /> Check Essay  </Link></li>
            <li> <Link to = 'example'> <FaBookOpen /> Samples </Link></li>
        </ul>
    </div>
  )
}

export default Nav;