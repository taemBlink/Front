import React from "react";
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
        <button>팀 블링크 채용</button>
      </div>
      <div>
        <button>글쓰기</button>
        <button>로그인</button>
      </div>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.div`
`;
