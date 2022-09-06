import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

const EditPost = () => {
    const { postId } = useParams();
    const [values, setValues] = useState({});
    const navigate = useNavigate();
    const [cookies] = useCookies(["accessToken"]);
  
    useEffect(() => {
      axios
        .get(`https://binar-blog-app.herokuapp.com/posts/${postId}`)
        .then((res) => setValues(res.data))
        .catch((err) => console.error(err));
    }, []);
  
    const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
      console.log({ [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .put(`https://binar-blog-app.herokuapp.com/posts/${postId}`, values, {
          headers: { Authorization: `Bearer ${cookies.accessToken}` },
        })
        .then((res) => navigate("/dashboard"))
        .catch((err) => {
          alert("something wrong, pelase relogin");
          navigate("/login");
        });
    };  

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container"> 
            <div className="columns is-centered">
                <div className="column is-4-desktop">
                <form className="box" onSubmit={handleSubmit}>
                <h1>Update Post</h1>
                    <div className="field mt-5">
                            <label className="label">Title</label>
                            <div className="controls">
                                <input className="input" placeholder="Title" id="title" name="title" type="text" value={values.title} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="field mt-3">
                            <label className="label">Image</label>
                            <div className="controls">
                                <input className="input" placeholder="Link url image from another web" id="image" name="image" type="text" value={values.image} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="field mt-3">
                            <label className="label">Body</label>
                            <div className="controls">
                                <input className="textarea" placeholder="Post content" id="body" name="body" type="text" rows="10" cols="50" value={values.body} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <button className="button is-success is-fullwidth">Submit</button>
                        </div>
                </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default EditPost;