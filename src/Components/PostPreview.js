import React from "react";
import { Link } from "react-router-dom";

export default function PostPreview(props) {
  return (
    <div className="col-md-10 col-lg-8 col-xl-7">
      {/* Post preview */}
      <div className="post-preview">
        <Link href="post.html">
          <button type="button" className="btn btn-danger"
          onClick={props.delete}>
            Delete
          </button>
          <h2 className="post-title">{props.title}</h2>
          <h3 className="post-subtitle">{props.body}</h3>
        </Link>
      </div>
      {/* Divider */}
      <hr className="my-4" />
    </div>
  );
}
