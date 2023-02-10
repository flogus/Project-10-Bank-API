import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import Account from './account'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Userinfo } from './../../features/user/Userinfo'

import {
  update,
  updateUser,
  updateUtili
} from './../../features/user/userSlice'

import {
  initTransac,
  addATransac
} from '../../features/transactions/transactionsSlice'

const accounteList = [
  {
    title: 'Checking (x8349)',
    text: 'Available Balance',
    amount: 2082.79
  },
  {
    title: 'Savings (x6712)',
    text: 'Available Balance',
    amount: 10928.42
  },
  {
    title: 'Credit Card (x8349)',
    text: 'Current Balance',
    amount: 184.3
  }
]

function Transactions (props) {
  const [token, setToken] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const transactions = useSelector(state => state.transactions)

  useEffect(() => {
    return () => {
      const token = localStorage.getItem('abToken')
      setToken(token)
      getProfile(token)
      initTransac()
    }
  })

  const profileUrl = 'http://localhost:3001/api/v1/user/profile'

  const getProfile = token => {
    axios
      .post(profileUrl, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(function (response) {
        const myPayload = {
          firstName: response.data.body.firstName,
          lastName: response.data.body.lastName,
          email: response.data.body.email,
          password: response.data.body.password
        }
        dispatch(update(myPayload))
      })
  }

  if (token) {
    return (
      <div className='App'>
        <Banner />
        <main className='main bg-dark'>
          <div className='header'>
            <h1>
              Welcome back
              <div
                style={{
                  justifyContent: 'center',
                  display: 'flex'
                }}
              >
                <Userinfo />
                <div>!</div>
              </div>
            </h1>
            <button
              className='edit-button'
              onClick={() => dispatch(initTransac())}
            >
              Change transactions
            </button>
            <button
              className='edit-button'
              onClick={() => dispatch(updateUser())}
            >
              Change user
            </button>

            <Link to='/profile'>
              <button className='edit-button'>Profile</button>
            </Link>
            <h4>transactions: {transactions.amount}</h4>
          </div>
          <h2 className='sr-only'>Accounts</h2>
          <Account
            amount={transactions.amount}
            title={transactions.title}
            text={transactions.text}
            key={transactions.amount}
          />

          {accounteList.map((element, index) => {
            return (
              <Account
                amount={element.amount}
                title={element.title}
                text={element.text}
                key={element.amount}
              />
            )
          })}
        </main>
        <Footer />
      </div>
    )
  } else {
    return (
      <div>
        No token found
        <br />
        <Link to='/signin'>Please, go signin</Link>
      </div>
    )
    // navigate('/signin')
  }
}

export default Transactions
