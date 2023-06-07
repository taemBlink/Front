import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import { AuthApi } from "../shared/Api";
import Navibar from "../Components/Layout/Navigationbar/Navibar";
import moment from "moment";

function PostList() {
  const [getPostList, setGetPostList] = useState([]);
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  // const keywords = new URLSearchParams(location.search).get("keywords");
  const [keywords, setKeywords] = useState("");

  const fetchPostList = async () => {
    try {
      const response = await AuthApi.getpost();
      console.log(response);
      setGetPostList(response.data.jobs);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching post list:", error);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      await fetchPostList();
      const filteredList = getPostList.filter((item) => {
        if (keywords === "") {
          return true; // 모든 데이터를 가져옴
        }
        return item.keywords === keywords;
      });
      setPostList(filteredList);
    };
  
    fetchData();
  }, [keywords]);

  const daysRemaining = (endDate) => {
    const today = moment().startOf("day");
    const end = moment(endDate, "YYYY-MM-DD").startOf("day");
    const duration = moment.duration(end.diff(today));
    const days = duration.asDays();
    return Math.ceil(days);
  };

  const handlePostClick = (job_id) => {
    navigate(`/job/${job_id}`);
  }

  return (
    <Layout>
      <Navibar setKeywords={setKeywords} />
      <GridDiv>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {postList.map((post, index) => (
              <Card key={post.job_id}>
                <CardContent>
                  {post.end_date ? (
                    <Dday>
                      {daysRemaining(post.end_date) > 0
                        ? `D- ${daysRemaining(post.end_date)}`
                        : "오늘 마감"}
                    </Dday>
                  ) : (
                    <Dday>상시채용</Dday>
                  )}
                  <h2 onClick={() => handlePostClick(post.job_id)}>
                    {post.title}
                  </h2>
                  <p>기업명: {post.company}</p>
                  {/* <p>직군: {post.keywords}</p> */}
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

const Dday = styled.div`
  border-color: #66cdaa;
  border-radius: 9px;
  border: solid 0.5px;
  font-size: 9px;
  color: #66cdaa;
  padding: 2px;
`;
