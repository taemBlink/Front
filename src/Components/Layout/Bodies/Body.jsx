import React, { useState, useEffect } from "react";

function Body() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 백엔드에서 글목록 데이터를 가져오는 비동기 함수 호출
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("백엔드 API URL");
      const data = await response.json();
      setPosts(data); // 가져온 데이터를 상태에 저장
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div>
      <h1>글목록</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Body;
