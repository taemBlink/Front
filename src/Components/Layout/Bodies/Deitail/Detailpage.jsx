import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { AuthApi } from "../../../../shared/Api";

function Detailpage() {
  const { job_id } = useParams();
  const [content, setContent] = useState("");
  const processedHtml = React.createElement("div", {
    dangerouslySetInnerHTML: { __html: content },
  });
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchPost = async () => {
    try {
      const response = await AuthApi.getdetail(job_id);
      console.log("response:", response);
      setPost(response.data.job);
      setContent(response.data.job.content);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching post:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPost();
  }, [0]);

  return (
    <div className="detail-container">
      <div className="content">
        {isLoading ? (
          <p>Loading...</p>
        ) : post ? (
          <div>
            <h2>{post.title}</h2>

            {processedHtml}
          </div>
        ) : (
          <p>Post not found</p>
        )}
      </div>
      <Sidebar />
    </div>
  );
}

export default Detailpage;
