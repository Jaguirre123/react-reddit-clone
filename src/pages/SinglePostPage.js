import React, { Component } from "react";
import Comment from "../components/Comment/Comment";
import Post from "../components/Post/Post";
import { Link } from "react-router-dom";
class SinglePostPage extends Component {
  render() {
    return (
      <div>
        <p className="SinglePostPage">Single Post Page</p>
        <p>{this.props.match.params.post_id}</p>
        <p>{this.props.post.title}</p>
        <Post post={this.props.post} />
        <Link
          className="btn btn-default btn-sm"
          to="/"
          style={{ marginTop: 40 }}
        >
          Home Page
        </Link>
      </div>
    );
  }
}

export default SinglePostPage;