import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout/Layout";

function PostList() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await axios.get("http://example.com/api/posts"); // 백엔드 API의 주소로 변경해야 합니다.
        setPostList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching post list:", error);
        setIsLoading(false);
      }
    };

    fetchPostList();
  }, []);

  const handlePostClick = (postId) => {
    navigate(`/detail/${postId}`); // 상세 페이지로 이동하도록 경로를 지정합니다.
  };

  return (
    <Layout>
      <Container>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {postList.map((post, index) => (
              <RepeatedDiv key={post.id}>
                <Row>
                  <h2 onClick={() => handlePostClick(post.id)}>{post.title}</h2>
                  <StImgBox imageUrl={post.imageURL}></StImgBox>
                </Row>
              </RepeatedDiv>
            ))}
          </>
        )}
      </Container>
    </Layout>
  );
}

export default PostList;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`;

const RepeatedDiv = styled.div`
  flex: 1;
  width: 50%;

  &:nth-child(2n) {
    /* 두 번째 열 스타일 */
  }
`;
const StImgBox = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 80%;
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
