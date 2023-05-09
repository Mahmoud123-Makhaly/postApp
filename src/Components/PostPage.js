import React from 'react'
import { Link, useParams } from 'react-router-dom'
 
const PostPage = ({posts,handleDelete}) => {
  const params = useParams();
const Post = posts.find((item)=>{
return(
(  item.id).toString() === params.id
)
});

  return (
 <div className='grow'>
 {
  Post?(
    <>
    <h4>{Post.title}</h4>
    <h6>{Post.datetime}</h6>
    <p>{Post.body}</p>
    <button className='btn btn-danger' onClick={()=>handleDelete(Post.id)}>Delete Post</button>
    </>
  ):(
  <>
  <h3>Post Not Found</h3>
  <p>Wee , Thats DisAppointing!</p>
  <Link to = "/">Visit Our Home Page</Link>
  </>
  )
 }
 </div>
  )
}

export default PostPage