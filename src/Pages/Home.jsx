import React from "react";
import Layout from "../Components/Layout/Layout";

function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="wrapped">
          <div role="main" className="contents">
            <section role="search" className="wrap-srch-home">
              <input
                name="keyword"
                type="search"
                placeholder="관심있는 내용을 검색해보세요!"
                autocomplete="off"
                className="inp-srch"
              ></input>
              <button type="button" className="btn-srch">
                검색
              </button>
            </section>
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
              <div className="article">
                <span className="topic">
                  <a
                    href="/kr/topics/%EC%95%94%ED%98%B8%ED%99%94%ED%8F%90"
                    className=""
                  >
                    암호화폐
                  </a>
                </span>

                <a
                  href="/kr/post/%EC%97%84%EB%A7%88%EA%B0%80-%EC%82%AC%EC%9C%84-%EA%B5%AC%ED%95%9C%EB%8C%80-CpHsaOpU"
                  className="tit ico-img"
                >
                  엄마가 사위 구한대!!!!!
                </a>
                <div className="wrap-info">
                  <a className="like">
                    <i className="blind">좋아요</i>17
                  </a>
                  <a
                    href="/kr/post/%EC%97%84%EB%A7%88%EA%B0%80-%EC%82%AC%EC%9C%84-%EA%B5%AC%ED%95%9C%EB%8C%80-CpHsaOpU"
                    className="cmt"
                  >
                    <i className="blind">댓글</i>211
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
