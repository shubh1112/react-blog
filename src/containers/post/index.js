import React from 'react'
import './style.css'
import BlogPost from '../../components/blogpost'
import Sidebar from '../../components/sidebar'

const Post = props => {
  return (
    <section className="container">
      <BlogPost {...props}/>
      <Sidebar/>
    </section>
  )
}

export default Post
