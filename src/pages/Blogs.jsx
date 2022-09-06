import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';


const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();


  const fetchPosts = () => {
    axios
      .get("https://binar-blog-app.herokuapp.com/posts")
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

    // const convertElipsisBody = (body) => {
    // return body.length > 100 ? body.slice(0,100) + "..." : body
    //     }


  return (
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
                            </Card.Body>
                        </Card>
                        </div>
                    )
                })}
            </div>
        </div>
  );
};

export default Blogs;