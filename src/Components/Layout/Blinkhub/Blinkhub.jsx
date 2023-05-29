import React from "react";
import styled from "styled-components";

function Blinkhub() {
  return (
    <StWrap>
      <Stbtn>(기능 아이콘)Blink Hub 기업 서비스(꺽쇠 아이콘)</Stbtn>
    </StWrap>
  );
}

export default Blinkhub;

const StWrap = styled.div`
  background-color: #222;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: block;
  height: 40px;
  z-index: 10000;
  
  background: #222;
  overflow: inherit;
  line-height: 1.25em;
  word-wrap: break-word;

  padding: 0 30px;
  box-sizing: border-box;
`;

const Stbtn = styled.button`
  background: #222;
  color: white;
  font-weight: bold;
  font-size: 14px;
  font-family: "Roboto", "Noto Sans KR", AppleSDGothicNeo-Regular,
    "Malgun Gothic", "맑은 고딕", dotum, "돋움", sans-serif;
  overflow: inherit;
  
  
  box-sizing: border-box;
  top: 0;
  left: 0;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  margin-top: 10px;
  cursor: pointer;
`;
