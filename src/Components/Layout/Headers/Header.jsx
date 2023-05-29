import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <StHeader>
      <div>
        <button>Blink</button>
        <button>홈</button>
        <button>기업 리뷰(미구현)</button>
        <button>채용 공고</button>
        <button>TOPIC</button>
      </div>
      <div>
        <StJoinTeamBtn>팀 블링크 채용</StJoinTeamBtn>
      </div>
      <div>
        <Link to={"/posting"}>
          <StBtnPosting>글쓰기</StBtnPosting>
        </Link>

        <StBtnSignIn>로그인</StBtnSignIn>
      </div>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.div``;

const StBtnPosting = styled.button`
  margin-right: 8px;
  background-color: #da3238;
  border-color: #da3238;
  color: white;
  font-size: 13px;
  font-weight: bold;
  border: none;
  box-shadow: none;
  border-radius: 0;
  width: 60px;
  height: 30px;
`;

const StBtnSignIn = styled(StBtnPosting)`
  margin-right: 8px;
  background-color: white;
  color: #222;

  border: 2px solid #d4d4d4;
`;

const StJoinTeamBtn = styled.button``;
