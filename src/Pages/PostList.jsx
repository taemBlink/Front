import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import { AuthApi } from "../shared/Api";
import Navibar from "../Components/Layout/Navigationbar/Navibar";
import moment from "moment";

function PostList() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await AuthApi.getpost();
        console.log(response);
        setPostList(
          response.data.jobs.map((post) => ({
            ...post,
            companyName: post.companyName,
          }))
        );
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching post list:", error);
        setIsLoading(false);
      }
    };

    fetchPostList();
  }, []);

  const handlePostClick = (job_id) => {
    navigate(`/job/${job_id}`);
  };
  // console.log("목록:", postList);
  const daysRemaining = (endDate) => {
    const today = moment().startOf("day");
    const end = moment(endDate, "YYYY-MM-DD").startOf("day");
    const duration = moment.duration(end.diff(today));
    const days = duration.asDays();
    return Math.ceil(days);
  };

  return (
    <Layout>
      <Navibar />
      <GridDiv>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {postList.map((post, index) => (
              <Card key={post.job_id}>
                <CardContent>
                  {post.end_date ? (
                    <p>
                      {daysRemaining(post.end_date) > 0
                        ? `D- ${daysRemaining(post.end_date)}`
                        : "오늘 마감"}
                    </p>
                  ) : (
                    <p>상시채용</p>
                  )}
                  <h2 onClick={() => handlePostClick(post.job_id)}>
                    {post.title}
                  </h2>
                  <p>기업명: {post.company}</p>
                  <p>직군: {post.keywords}</p>
                  <p>주소: {post.address}</p>
                </CardContent>
                <StImgBox imageUrl={post.imageURL}></StImgBox>
              </Card>
            ))}
          </>
        )}
      </GridDiv>
    </Layout>
  );
}

export default PostList;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 0.5px;
  height: 200vh;
  padding-left: 150px;
  padding-right: 150px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;

  p {
    margin: 5px 0;
  }

  h2 {
    margin: 10px 0;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: #4285f4;
    }
  }
`;

const StImgBox = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
`;
