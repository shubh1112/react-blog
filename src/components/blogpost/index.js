import React, { useEffect, useState } from 'react'
import'./style.css'
import Card from '../ui/card'
import blogPost from '../../data/blog.json'

const BlogPost = props => {

  const [postId, setPostId] = useState(props.match.params.postId);
  const [post, setPost] = useState(blogPost.data.find(post => post.id == postId));

  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find(post => post.id == postId);
    setPost(post);
    setPostId(postId);
  }, [post, props.match.params.postId]);

  return (
    <div className="blogpost">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
        </div>

        <div className="blogImage">
          <img src={require(`../../assets/images/${post.blogImage}`)} alt="Post"/>
        </div>

        <div className="blogContent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
      </Card>
    </div>
  )
}

export default BlogPost
