import React from "react";
import Layout from "../Components/Layout/Layout";
import styled from "styled-components";

function Home() {
  return (
    <Layout>
      <Container>
        <Wrapped>
          <Main>
            <Section>
              <Input
                name="keyword"
                type="search"
                placeholder="관심있는 내용을 검색해보세요!"
                autocomplete="off"
                className="inp-srch"
              ></Input>
              <Searchbtn type="button" className="btn-srch"></Searchbtn>
            </Section>
            <TopicSection>
              <div className="home-list">
                <div className="topic-list best">
                  <TopicH2>
                    <TopicIcon>
                      <img
                        src="https://d2u3dcdbebyaiu.cloudfront.net/img/web/ico-best.png"
                        alt="icon"
                        width="32"
                        height="32"
                      />
                      <span>토픽 베스트</span>
                    </TopicIcon>
                  </TopicH2>
                </div>
                <Display className="article">
                  <Display>
                    <Topic>암호화폐</Topic>
                    <a style={{ marginLeft: "10px", fontWeight: "bold" }}>
                      {" "}
                      엄마가 사위 구한대!!!!!
                    </a>
                  </Display>
                  <RightContent>
                    <link
                      rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,300,0,0"
                    />
                    <Like>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        thumb_up
                      </span>
                      <span style={{ fontSize: "15px" }}>17</span>
                    </Like>
                    <Comment>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        mode_comment
                      </span>
                      <span style={{ fontSize: "15px" }}>200</span>
                    </Comment>
                  </RightContent>
                </Display>
                <Display className="article">
                  <Display>
                    <Topic>우리회사 채용해요</Topic>
                    <a style={{ marginLeft: "10px", fontWeight: "bold" }}>
                      {" "}
                      [Rockwell Automation] MES Project Manager
                    </a>
                  </Display>
                  <RightContent>
                    <Like>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        thumb_up
                      </span>
                      <span style={{ fontSize: "15px" }}>17</span>
                    </Like>
                    <Comment>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        mode_comment
                      </span>
                      <span style={{ fontSize: "15px" }}>200</span>
                    </Comment>
                  </RightContent>
                </Display>
                <Display className="article">
                  <Display>
                    <Topic>주식·투자</Topic>
                    <a style={{ marginLeft: "10px", fontWeight: "bold" }}>
                      {" "}
                      20대 초반에 든 종합보험이 좀 비싼느낌입니다
                    </a>
                  </Display>
                  <RightContent>
                    <Like>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        thumb_up
                      </span>
                      <span style={{ fontSize: "15px" }}>17</span>
                    </Like>
                    <Comment>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        mode_comment
                      </span>
                      <span style={{ fontSize: "15px" }}>200</span>
                    </Comment>
                  </RightContent>
                </Display>
                <Display className="article">
                  <Display>
                    <Topic>블라마켓</Topic>
                    <a style={{ marginLeft: "10px", fontWeight: "bold" }}>
                      {" "}
                      스타벅스 프리퀀시 미션, 일반 구매합니다.
                    </a>
                  </Display>
                  <RightContent>
                    <Like>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        thumb_up
                      </span>
                      <span style={{ fontSize: "15px" }}>17</span>
                    </Like>
                    <Comment>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        mode_comment
                      </span>
                      <span style={{ fontSize: "15px" }}>200</span>
                    </Comment>
                  </RightContent>
                </Display>
                <Display className="article">
                  <Display>
                    <Topic>스포츠</Topic>
                    <a style={{ marginLeft: "10px", fontWeight: "bold" }}>
                      {" "}
                      요즘 대세 골프채브랜드는 어디야?
                    </a>
                  </Display>
                  <RightContent>
                    <Like>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        thumb_up
                      </span>
                      <span style={{ fontSize: "15px" }}>17</span>
                    </Like>
                    <Comment>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        mode_comment
                      </span>
                      <span style={{ fontSize: "15px" }}>200</span>
                    </Comment>
                  </RightContent>
                </Display>
                <Display className="article">
                  <Display>
                    <Topic>여행·먹방</Topic>
                    <a style={{ marginLeft: "10px", fontWeight: "bold" }}>
                      {" "}
                      브런치로 시작하는 하루
                    </a>
                  </Display>
                  <RightContent>
                    <Like>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        thumb_up
                      </span>
                      <span style={{ fontSize: "15px" }}>17</span>
                    </Like>
                    <Comment>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        mode_comment
                      </span>
                      <span style={{ fontSize: "15px" }}>200</span>
                    </Comment>
                  </RightContent>
                </Display>
                <Display className="article">
                  <Display>
                    <Topic>직접 홍보</Topic>
                    <a style={{ marginLeft: "10px", fontWeight: "bold" }}>
                      {" "}
                      피부 색소 리프팅 모공 홍조 주름 등 답변 해드릴게요
                    </a>
                  </Display>
                  <RightContent>
                    <Like>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        thumb_up
                      </span>
                      <span style={{ fontSize: "15px" }}>17</span>
                    </Like>
                    <Comment>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        mode_comment
                      </span>
                      <span style={{ fontSize: "15px" }}>200</span>
                    </Comment>
                  </RightContent>
                </Display>
              </div>
            </TopicSection>
          </Main>
          <Aside>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0"
            />
            <LstRanking>
              <LstHeader>실시간 인기 회사</LstHeader>
              <StdivRank>
                <StpRank>
                  <StemRank>1</StemRank>
                  <StaRank>강원랜드</StaRank>
                  <span
                    class="material-symbols-outlined"
                    style={{ fontSize: "17px", marginLeft: "auto" }}
                  >
                    remove
                  </span>
                </StpRank>
                <StpRank>
                  <StemRank>2</StemRank>
                  <StaRank>시몬스</StaRank>
                  <span
                    class="material-symbols-outlined"
                    style={{
                      fontSize: "17px",
                      marginLeft: "auto",
                      color: "red",
                    }}
                  >
                    arrow_drop_up
                  </span>
                </StpRank>
                <StpRank>
                  <StemRank>3</StemRank>
                  <StaRank>우리산업</StaRank>
                  <span
                    class="material-symbols-outlined"
                    style={{
                      fontSize: "17px",
                      marginLeft: "auto",
                      color: "red",
                    }}
                  >
                    arrow_drop_down
                  </span>
                </StpRank>
                <StpRank>
                  <StemRank>4</StemRank>
                  <StaRank>경찰청</StaRank>
                  <span
                    class="material-symbols-outlined"
                    style={{ fontSize: "17px", marginLeft: "auto" }}
                  >
                    remove
                  </span>
                </StpRank>
                <StpRank>
                  <StemRank>5</StemRank>
                  <StaRank>현대자동차</StaRank>
                  <span
                    class="material-symbols-outlined"
                    style={{ fontSize: "17px", marginLeft: "auto" }}
                  >
                    remove
                  </span>
                </StpRank>
                <StpRank>
                  <StemRank>6</StemRank>
                  <StaRank>COUPANG</StaRank>
                  <span
                    class="material-symbols-outlined"
                    style={{
                      fontSize: "17px",
                      marginLeft: "auto",
                      color: "red",
                    }}
                  >
                    arrow_drop_up
                  </span>
                </StpRank>
                <StpRank>
                  <StemRank>7</StemRank>
                  <StaRank>우수AMS</StaRank>
                  <span
                    class="material-symbols-outlined"
                    style={{
                      fontSize: "17px",
                      marginLeft: "auto",
                      color: "red",
                    }}
                  >
                    arrow_drop_up
                  </span>
                </StpRank>
                <StpRank>
                  <StemRank>8</StemRank>
                  <StaRank>하이퍼커넥트</StaRank>
                  <span
                    class="material-symbols-outlined"
                    style={{ fontSize: "17px", marginLeft: "auto" }}
                  >
                    remove
                  </span>
                </StpRank>
              </StdivRank>
            </LstRanking>
          </Aside>
        </Wrapped>
      </Container>
    </Layout>
  );
}
export default Home;

const Container = styled.div`
  display: block;
`;

const Wrapped = styled.div`
  flex-direction: row;
  border-top: none;
  padding: 40px 20px 0;
  margin-left: 130px;
  display: flex;
  max-width: 1140px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Main = styled.div`
  width: 736px;
  min-height: 800px;
`;

const Section = styled.section`
  width: 736px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  margin: 10px;
  padding: 5px;
`;

const Input = styled.input`
  flex: 1;
  display: block;
  width: 700px;
  height: 60px;
  padding: 0 10px 0 62px;
  border: 2px solid #222;
  border-radius: 30px;
  font-size: 18px;
  box-sizing: border-box;
  -webkit-rtl-ordering: logical;
  cursor: text;
  background-color: field;
`;

const Searchbtn = styled.button`
  position: absolute;
  margin-left: 25px;
  display: block;
  width: 24px;
  height: 24px;
  background: url(https://static.teamblind.com/img/www_kr/sp-kr.png) no-repeat;
  background-size: 600px 900px;
  background-position: -10px -350px;
  content: "";
  overflow: visible;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const TopicSection = styled.div`
  width: 736px;
`;

const TopicH2 = styled.h2`
  position: relative;
  border-bottom: 2px solid #eee;
  font-weight: bold;
`;

const TopicIcon = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Topic = styled.div`
  color: #94969b;
  display: block;
  height: 20px;
  width: auto;

  border: 1px solid #eee;
  /* vertical-align: middle; */
  text-align: center;
  font-size: 12px;
`;

const Display = styled.div`
  display: flex;
  margin-top: 5px;
`;

const Like = styled.a`
  color: #94969b;
  margin: 0 0 0 11px;
  display: inline-flex;
  align-items: center;
`;

const Comment = styled.a`
  color: #94969b;
  margin: 0 0 0 11px;
  display: inline-flex;
  align-items: center;
`;

const RightContent = styled.div`
  margin-left: auto;
  justify-content: space-between;
`;

const Aside = styled.div`
  width: 300px;
  margin-left: 64px;
  display: block;
  color: #222;
  font-size: 14px;
  font-family: "Roboto", "Noto Sans KR", AppleSDGothicNeo-Regular,
    "Malgun Gothic", "맑은 고딕", dotum, "돋움", sans-serif;
  line-height: 1.25em;
  word-wrap: break-word;
`;

const LstHeader = styled.h1`
  padding-bottom: 8px;
  padding-left: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const LstRanking = styled.div`
  margin-bottom: 24px;
  padding: 22px 21px 14px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  color: #222;
  font-size: 14px;
  font-family: "Roboto", "Noto Sans KR", AppleSDGothicNeo-Regular,
    "Malgun Gothic", "맑은 고딕", dotum, "돋움", sans-serif;
  line-height: 1.25em;
  word-wrap: break-word;
`;

const StdivRank = styled.div`
  column-gap: 0;
`;

const StpRank = styled.p`
  width: 100%;
  padding: 5px 3px;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  font-size: 14px;
  height: 13px;
  display: inline-flex;
  align-items: center;
`;

const StemRank = styled.em`
  display: inline-block;
  width: 20px;
  margin-right: 10px;
  font-weight: bold;
  color: #94969b;
  text-align: center;
  line-height: 20px;
  vertical-align: middle;
  font-style: normal;
`;

const StaRank = styled.a`
  display: inline-block;
  line-height: 17px;
  vertical-align: middle;
  text-decoration: none;
  color: #222;
  cursor: pointer;
  font-size: 14px;
  font-family: "Roboto", "Noto Sans KR", AppleSDGothicNeo-Regular,
    "Malgun Gothic", "맑은 고딕", dotum, "돋움", sans-serif;
  line-height: 1.25em;
  word-wrap: break-word;
`;