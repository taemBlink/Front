import React, { useState, useEffect } from "react";
import styled from "styled-components";

function PostList() {
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
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <StImgBox imageUrl={post.imageURL}></StImgBox>
        </div>
      ))}
    </div>
  );
}

export default PostList;
const StImgBox = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 80%;
`;
