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
        const response = await axios.get("http://54.180.142.54/job"); // 백엔드 API의 주소로 변경해야 합니다.
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
              <Card key={post.id} onClick={() => handlePostClick(post.id)}>
                <CardContent>
                  <h2>{post.title}</h2>
                  <StImgBox imageUrl={post.imageURL}></StImgBox>
                </CardContent>
              </Card>
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

const Card = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StImgBox = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 80%;
`;
