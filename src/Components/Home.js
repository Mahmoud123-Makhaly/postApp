import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {
  return (
    <div className='home grow '>
    {
      posts.length?(
     <Feed posts={posts} />
      ):(<h4 style={{margin:"1em"}}>No Posts To Display</h4>)
    }
    </div>
  )
}

export default Home