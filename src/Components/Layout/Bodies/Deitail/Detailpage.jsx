import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";

function Detailpage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_SERVER_URL.replace(
            ":job_id",
            postId
          )}`
        );
        setPost(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  return (
    <div className="detail-container">
      <div className="content">
        {isLoading ? (
          <p>Loading...</p>
        ) : post ? (
          <div>
            <h2>{post.title}</h2>
            <img src={post.imageURL} alt={post.title} />
            <p>{post.content}</p>
          </div>
        ) : (
          <p>Post not found</p>
        )}
      </div>
      <Sidebar postId={postId} />
    </div>
  );
}

export default Detailpage;
