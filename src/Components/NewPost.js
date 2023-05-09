import React from 'react'

const NewPost = ({handleSubmit , postTitle,setPostTitle , postBody , setPostBody}) => {
  return (
    <div className='newpost grow '>
    <h3>New Post</h3>
    <form className='post-form' onSubmit={handleSubmit}>
    <label htmlFor='postTitle'>Title:</label>
    <input required type='text' id='postTitle' value={postTitle} onChange={(e)=>setPostTitle(e.target.value)}/>
    <label htmlFor='postBody'>Post:</label>
<textarea  required id={postBody}  value={postBody} onChange={(e)=>setPostBody(e.target.value)}/>
<input type='submit'/>   
</form>
    </div>
  )
}

export default NewPost