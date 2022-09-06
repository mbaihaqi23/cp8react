import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Card from 'react-bootstrap/Card';

const Dashboard = () => {
  const [cookies] = useCookies(["accessToken"]);
  console.log(cookies.userId);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = () => {
    axios
      .get(
        `https://binar-blog-app.herokuapp.com/posts?writer=${cookies.userId}`
      )
      .then((res) => {
        const listPosts = res.data;
        setPosts(listPosts);
      })
      .catch((err) => console.error(err));
  };

  const handleClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="mb3">
        <h1 className="h1Title ptb3">My Dashboard</h1>
        <div className="container h1Title">
          <button style={{ padding: "7.5px", background: "#ffdba4" }}>
            <Link to="/posts/create" style={{ textDecoration: "none" }}>
              Create New Post
            </Link>
          </button>
        </div>
        <div
          className="h1Title ptb3"
          style={{ display: posts.length < 1 ? "" : "none" }}
        >
          Post not found!
        </div>

        <div className="container">
            <h1 className="text-center mt-3">my blog</h1>
            <div className="row mt-5">
                {posts.map((post) => {
                    return (
                        <div className="col" key={post.id}>
                        <Card style={{ width: '30rem', height: '20rem' }} className="m-2">
                        <Card.Img style={{backgroundImage: `url(${post.image})`, height: '15rem'}} variant="top" src="holder.js/100px180" />
                            <Card.Body>
                            <Card.Title style={{ height: '1rem', display: 'flex', alignItems: 'center'}}><a href={`/blogs/${post.id}`}>{post.title}</a></Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                            <Card.Link to={`/posts/${post.id}/edit`}>Edit</Card.Link>
                            </Card.Body>
                        </Card>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    </>
  );
};

export default Dashboard;