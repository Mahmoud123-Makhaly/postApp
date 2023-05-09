import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({item}) => {
  return (
    <div className='post'>
<Link to = {`newpost/${item.id}`}>
<h3>{item.title}</h3>
<p>{item.datetime}</p>
</Link>
<p>{
    (item.body).length<25?   (item.body) : `${(item.body).slice(0 , 25)}...`
}</p>
    </div>
  )
}

export default Post