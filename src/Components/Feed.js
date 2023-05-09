import React from 'react'
import Post from './Post'

const Feed = ({posts}) => {
  return (
    <>
    {
        posts.map((item)=>{
            return(
        <Post key={item.id} item={item} />
            )
                    })
    }
    </>
  )
}

export default Feed