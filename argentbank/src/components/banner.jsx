import React, { useEffect, useState } from 'react'
import Logo from '../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Banner () {
  const [token, setToken] = useState('')

  useEffect(() => {
    return () => {
      const abToken = localStorage.getItem('abToken')
      setToken(abToken)
    }
  }, [])

  const removeToken = () => localStorage.removeItem('abToken')

  if (token) {
    return (
      <nav className='main-nav'>
        <Link className='main-nav-logo' to='/'>
          <img
            src={Logo}
            className='main-nav-logo-image'
            alt='Argent Bank Logo'
          />
          <h1 className='sr-only'>Argent Bank</h1>
        </Link>
        <div>
          <Link className='main-nav-item' to='/profile'>
            <i className='fa fa-user-circle'></i>
            <FontAwesomeIcon icon={faUserCircle} className='fa' />
            Prenom Nom
          </Link>
          <Link className='main-nav-item' to='/'>
            <FontAwesomeIcon icon={faRightFromBracket} className='fa' />
            Sign Out
          </Link>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className='main-nav'>
        <Link className='main-nav-logo' to='/'>
          <img
            src={Logo}
            className='main-nav-logo-image'
            alt='Argent Bank Logo'
          />
          <h1 className='sr-only'>Argent Bank</h1>
        </Link>
        <div>
          <Link className='main-nav-item' to='/signin'>
            <i className='fa fa-user-circle'></i>
            <FontAwesomeIcon icon={faUserCircle} className='fa' />
            Sign In
          </Link>
        </div>
      </nav>
    )
  }
}

export default Banner
