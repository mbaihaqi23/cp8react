import { Component } from "react";

class Post extends Component {

  render() {
    return (
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <div><th>Postingan Blog</th></div>
        <div>{this.props.posting.title}</div>
        <div>{this.props.posting.body}</div>
      </div>
    );
  }
}

export default Post;