import React from "react";
import "./style.css";
import Card from "../ui/card";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";
import SocialMedia from "../social-media";

const Sidebar = (props) => {

  const posts = blogPost.data;

  return (
    <div className="sidebar">
      <Card style={{ marginBottom: "20px", padding: "20px" }}>
        <div className="sidebarHeader">
          <span>About Us</span>
        </div>

        <div className="profileImage">
          <img
            src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt="About Us Image"
          />
        </div>

        <div className="sidebarBody">
          <span className="personalBio">
            My name is Shubham Sharma and I am a full stack developer at Yoryo
          </span>
        </div>
      </Card>

      <Card style={{ marginBottom: "20px", padding: "20px" }}>
        <div className="sidebarHeader">
          <span>Social Network</span>
        </div>

        <div className="socialMediaIcons">
          <SocialMedia />
        </div>
      </Card>

      <Card style={{ padding: "20px" }}>
        <div className="sidebarHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">
          {
            posts.map(post => {
              return (
                <NavLink to={`/post/${post.id}`} key={post.id}>
                  <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                  </div>
                </NavLink>
              );
            })
          }
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
