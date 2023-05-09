import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <div className='missing grow'>
    <h3>Page Not Found</h3>
    <p>Well , That's Disappointing!</p>
    <Link to="/">Visit Our Home Page</Link>
    </div>
  )
}

export default Missing