import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://binar-blog-app.herokuapp.com/posts/${postId}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
        <>
          <Card>
          <div  
            className="image ptb3"
            style={{
            backgroundImage: `url(${post.image})`,
            width: "567px",
            height: "350px",
            backgroundSize: "cover",
          }}
        ></div>
            <Card.Body>
            <Card.Title>{post.title}</Card.Title>
              <Card.Text>
              {post.body}
              </Card.Text>
              <Button  onClick={() => {navigate(-1);}} variant="outline-light">Details</Button>
            </Card.Body>
          </Card>
        </>
      );
}

export default DetailPost