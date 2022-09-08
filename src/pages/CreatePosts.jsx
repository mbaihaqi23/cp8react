import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function CreatePosts() {
    const [values, setValues] = useState({});
    const navigate = useNavigate();
    const [cookies] = useCookies(["accessToken"]);
  
    const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
      console.log({ [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("https://binar-blog-app.herokuapp.com/posts", values, {
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
                <h1>Create Post</h1>
                    <div className="field mt-5">
                            <label className="label">Title</label>
                            <div className="controls">
                            <input id="title" name="title" type="text" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="field mt-3">
                            <label className="label">Image</label>
                            <div className="controls">
                            <input id="image" name="image" type="text" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="field mt-3">
                            <label className="label">Body</label>
                            <div className="controls">
                            <textarea
                              id="body"
                              name="body"
                              type="text"
                              rows="10"
                              cols="50"
                              value={values.body}
                              onChange={handleChange}
                              ></textarea>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <button type="submit" className="button is-success is-fullwidth">Submit</button>
                        </div>
                </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
