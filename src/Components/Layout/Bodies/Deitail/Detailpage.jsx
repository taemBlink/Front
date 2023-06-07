import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { AuthApi } from "../../../../shared/Api";
import Layout from "../../Layout";
import styled from "styled-components";
import moment from "moment";

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

  const daysRemaining = (endDate) => {
    const today = moment().startOf("day");
    const end = moment(endDate, "YYYY-MM-DD").startOf("day");
    const duration = moment.duration(end.diff(today));
    const days = duration.asDays();
    return Math.ceil(days);
  };

  return (
    <Layout>
      <DetailContainer>
        {isLoading ? (
          <p>Loading...</p>
        ) : post ? (
          <StContentBox>
            <StKeywordBox>채용 &gt; {post.keywords}</StKeywordBox>
            {post.end_date ? (
              <StDday>
                {daysRemaining(post.end_date) > 0
                  ? `D- ${daysRemaining(post.end_date)}`
                  : "오늘 마감"}
              </StDday>
            ) : (
              <StDday>상시채용</StDday>
            )}
            <StH2>{post.title}</StH2>
            <StCompanyInfoBox>
              <StCompanyBox>{post.company}</StCompanyBox>
              <StAdressBox>{post.address}</StAdressBox>
            </StCompanyInfoBox>
            <StContentData>{processedHtml}</StContentData>
          </StContentBox>
        ) : (
          <p>Post not found</p>
        )}
        <Sidebar />
      </DetailContainer>
      <StSubmitBtn>지원하기</StSubmitBtn>
    </Layout>
  );
}

export default Detailpage;

const DetailContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;
const StContentBox = styled.div`
  width: 75%;
  border-right: 1px solid #333;
  margin-right: 15px;
`;

const StH2 = styled.h2`
  -webkit-text-size-adjust: none;
  margin: 0;
  padding: 0;
  color: #222;
  font-family: "Roboto", "Noto Sans KR", AppleSDGothicNeo-Regular,
    "Malgun Gothic", "맑은 고딕", dotum, "돋움", sans-serif;
  word-wrap: break-word;
  font-size: 30px;
  font-weight: bold;
  line-height: 28px;
  margin-top: 12px;
`;

const StDday = styled.div`
  display: inline-block;
  border-color: #66cdaa;
  border-radius: 9px;
  border: solid 0.5px;
  font-size: 15px;
  color: #66cdaa;
  padding: 5px;
  margin: 5px;
`;

const StCompanyBox = styled.div`
  margin: 10px;
  -webkit-text-size-adjust: none;
  font-family: "Roboto", "Noto Sans KR", AppleSDGothicNeo-Regular,
    "Malgun Gothic", "맑은 고딕", dotum, "돋움", sans-serif;
  word-wrap: break-word;
  font-size: 15px;
  line-height: 16px;
  touch-action: manipulation;
  text-decoration: none;
  cursor: pointer;
  margin-right: 4px;
  color: #37acc9;
`;

const StCompanyInfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const StAdressBox = styled(StCompanyBox)`
  color: #333;
`;
const StKeywordBox = styled.div`
  margin: 10px;
  color: #333;
  font-size: 15px;
  font-family: "Roboto", "Noto Sans KR", AppleSDGothicNeo-Regular,
    "Malgun Gothic", "맑은 고딕", dotum, "돋움", sans-serif;
  font-weight: bold;
`;

const StContentData = styled.div`
  overflow: auto;
`;

const StSubmitBtn = styled.button`
margin: 0 auto;
background-color: #da3238;
border-color: #da3238;
color: white;
font-size: 30px;
font-weight: bold;
border: none;
box-shadow: none;
border-radius: 0;
width: 80%;
height: 70px;
&:active {
  filter: brightness(0.9);
}
`;