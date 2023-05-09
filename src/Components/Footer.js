import React from 'react'

const Footer = () => {
  const myYear = new Date()
  return (
    <div className='footer'>
    <h4>CopyRight &copy; {myYear.getFullYear()}</h4>
    </div>
  )
}

export default Footer