import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search , setSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link to = "/" className="navbar-brand" href="#">Navbar</Link>
      <form className="d-flex" onSubmit={(e)=>e.preventDefault()}>
      <input defaultValue={search} onChange={(e)=>setSearch(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
     </form>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/newPost" className="nav-link" href="#">NewPost</Link>
          </li>
          <li className="nav-item">
          <Link to="/about" className="nav-link" href="#">About</Link>
        </li>
        </ul>
      
      </div>
    </div>
  </nav>
  )
}

export default Nav