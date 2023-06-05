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
            <div className="home-list">
              <div className="topic-list best">
                <h2>
                  <i className="ico">
                    <img
                      src="https://d2u3dcdbebyaiu.cloudfront.net/img/web/ico-best.png"
                      alt="icon"
                      width="32"
                      height="32"
                    />
                    토픽 베스트
                  </i>
                </h2>
              </div>
              <Display className="article">
                <Display>
                  <Topic>암호화폐</Topic>&nbsp; 엄마가 사위 구한대!!!!!
                </Display>
                <RightContent>
                  <Like>
                    <i className="blind"></i>&nbsp;&nbsp;17
                  </Like>
                  &nbsp;&nbsp;
                  <Comment>
                    <i className="blind"></i>&nbsp;&nbsp;211
                  </Comment>
                </RightContent>
              </Display>
              <Display className="article">
                <Display>
                  <Topic>암호화폐</Topic>&nbsp; 엄마가 사위 구한대!!!!!
                </Display>
                <RightContent>
                  <Like>
                    <i className="blind"></i>&nbsp;&nbsp;17
                  </Like>
                  &nbsp;&nbsp;
                  <Comment>
                    <i className="blind"></i>&nbsp;&nbsp;211
                  </Comment>
                </RightContent>
              </Display>
            </div>
          </Main>
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
  /* padding: 40px 20px 0; */
  margin-left: 130px;
`;

const Main = styled.div`
  width: 736px;
  min-height: 800px;
`;

const Section = styled.div`
  /* position: relative;
  display: block; */
  background: rgba(0, 0, 0, 0.05);
  margin: 10px;
  padding: 5px;
`;

const Input = styled.input`
  display: block;
  width: 600px;
  height: 50px;
  padding: 0 10px 0 62px;
  border: 2px solid #222;
  border-radius: 30px;
  font-size: 18px;
  box-sizing: border-box;
  -webkit-rtl-ordering: logical;
  cursor: text;
  background-color: field;
  /* vertical-align: top; */
`;

const Searchbtn = styled.button`
  position: absolute;
  top: 27.5%;
  left: 11%;
  transform: translate(-50%, -50%);
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

const Topic = styled.div`
  display: block;
  height: 20px;
  width: 50px;

  border: 1px solid #eee;
  /* vertical-align: middle; */
  text-align: center;
  font-size: 12px;
`;

const Display = styled.div`
  display: flex;
`;

const Like = styled.button`
  background: url(https://static.teamblind.com/img/www_kr/sp-kr.png) no-repeat;
  background-size: 600px 900px;
  background-position: -62px -600px;
  border: 0;
  background-color: transparent;
`;

const Comment = styled.button`
  background: url(https://static.teamblind.com/img/www_kr/sp-kr.png) no-repeat;
  background-size: 600px 900px;
  background-position: -36px -600px;
  border: 0;
  background-color: transparent;
`;

const RightContent = styled.div`
  margin-left: 300px;
`;
