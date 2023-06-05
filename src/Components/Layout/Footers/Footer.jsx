import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <StFooter>
      <div class="wrapped">
        <div class="info">
          <a href="/" class="">
            서비스 소개
          </a>{" "}
          <a href="/">이용약관</a>{" "}
          <a href="/" class="">
            디렉토리
          </a>{" "}
          <a href="/">
            개인정보 처리방침
          </a>{" "}
          <a href="/" target="_blank">
            <strong>Blink Hub</strong> 기업서비스
          </a>{" "}
          <a href="/" class="">
            신고가이드
          </a>{" "}
          <p class="hire-report">
            직업정보제공사업 신고번호 : <em>000000000000000000</em>
          </p>{" "}
          <p class="copy">© 2023 Teamblink. Inc</p>
        </div>{" "}
        <div class="app-download">
          <a class="appStore">APP STORE</a>{" "}
          <a class="googlePlay">GOOGLE PLAY</a>
        </div>
      </div>
    </StFooter>
  );
}

export default Footer;

const StFooter = styled.footer`
  color: #222;
  font-size: 14px;
  font-family: "Roboto", "Noto Sans KR", AppleSDGothicNeo-Regular,
    "Malgun Gothic", "맑은 고딕", dotum, "돋움", sans-serif;
  line-height: 1.25em;
  word-wrap: break-word;
  position: relative;
  margin-top: 60px;
  border-top: 1px solid #d4d4d4;
  text-align: left;
`;