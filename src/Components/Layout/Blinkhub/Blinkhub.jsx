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
  color: white;
  font-weight: bold;
  position: relative;
  display: block;
  height: 40px;
  z-index: 10000;
  width: 100%;
  background: #222;
  overflow: inherit;

  font-size: 14px;
  font-family: "Roboto", "Noto Sans KR", AppleSDGothicNeo-Regular,
    "Malgun Gothic", "맑은 고딕", dotum, "돋움", sans-serif;
  line-height: 1.25em;
  word-wrap: break-word;

  padding: 0 30px;
  box-sizing: border-box;
  top: 0px;
`;

const Stbtn = styled.button`
  background: #222;
  color: white;
  overflow: inherit;

  
  box-sizing: border-box;
  top: 0px;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  margin-top: 10px;
  cursor: pointer;
`;
