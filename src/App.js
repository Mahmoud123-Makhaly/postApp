import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Home from './Components/Home'
import PostPage from './Components/PostPage'
import NewPost from './Components/NewPost'
import About from './Components/About'
import Missing from './Components/Missing'
import Footer from './Components/Footer';
import { format } from 'date-fns'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Posts from './Posts'
const App = () => {
  const[search,setSearch] = useState('');
  const [posts,setPosts] = useState(Posts);
  const[postTitle , setPostTitle] = useState('');
  const[postBody , setPostBody] = useState('');
const[searchResults , setSearchResults] = useState([]);
  const navigate = useNavigate();
  const handleDelete = (id)=>{
 const newList  = posts.filter((item)=>{
  return(
item.id!==id
  )
 });
 setPosts(newList);
  navigate('/');  
  }
  const handleSubmit = (e)=>{
e.preventDefault();
const Data = {
  id:Math.random(),
  title:postTitle,
  datetime:format(new Date()  , "MMMM dd, yyyy hh:mm:ss a"),
  body:postBody
}
 setPosts((prev)=>{
  return[...prev , Data]
 });
 navigate("/")
  }

  useEffect(()=>{
const filteredData=  posts.filter((item)=>((item.body).toLowerCase()).includes(search.toLowerCase())||((item.title).includes(search.toLowerCase())));
setSearchResults(filteredData)
  } , [posts , search])
  return (
    <div className='app'>
    <Header title = "React Js Blog"/>
    <Nav   search={search} setSearch = {setSearch}/>
  <Routes>
 <Route path="/" element={<Home posts={searchResults}/>}/>
  <Route path="/newpost" element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody}/>}/>
  <Route  path='/newpost/:id' element={<PostPage posts = {posts} handleDelete={handleDelete}/>}/>
  <Route path="/about" element={<About/>}/>
   <Route path='*' element={   <Missing/> }/>
  </Routes>
    <Footer/>
    </div>
  )
}

export default App