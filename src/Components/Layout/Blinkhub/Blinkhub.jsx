import React from "react";
import styled from "styled-components";

function Blinkhub() {
  return (
    <StWrap>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <Stbtn>
        <span class="material-symbols-outlined">home</span>
        <span>Blink Hub 기업 서비스</span>
        <span class="material-symbols-outlined">chevron_right</span>
      </Stbtn>
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
  display: inline-flex;
  align-items: center;
  .material-symbols-outlined {
    vertical-align: middle;
  }
`;
