import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Signin from "../../../Pages/Signin";
import { createPortal } from "react-dom";
import { useCookies } from "react-cookie";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userType, setUserType] = useState("");
  // const [token, setToken] = useState(""); // 토큰 상태 추가
  const [cookies, setCookie, removeCookie] = useCookies();

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedin(false);
    removeCookie("authorization");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLoginSuccess = (token) => {
    setIsLoggedin(true);
    closeModal();
  };

  useEffect(() => {
    if (cookies.authorization) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [cookies]);

  return (
    <StHeader>
      <StSpaceDiv>
        <StLink to={"/"}>
          <h1 style={{ display: "flex", alignItems: "center" }}>
            <StLogoBtn>Blink</StLogoBtn>
            <StEm>Topic</StEm>
          </h1>
        </StLink>
        <StLink to={"/"}>
          <StMainBtn>홈</StMainBtn>
        </StLink>
        <StLink to={"/job"}>
          <StMainBtn>채용 공고</StMainBtn>
        </StLink>
      </StSpaceDiv>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div
        style={{ display: "flex", marginLeft: "auto", alignItems: "center" }}
      >
        <StJoinTeamBtn>
          <span class="material-symbols-outlined">handshake</span>
          <span>팀블링크 채용</span>
          <span class="material-symbols-outlined">chevron_right</span>
        </StJoinTeamBtn>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "100px" }}
      >
        <Link to={"/posting"}>
          {userType !== "regular" && ( // userType이 "regular"이 아닐 때에만 글쓰기 버튼을 표시합니다.
            <StBtnPosting>글쓰기</StBtnPosting>
          )}
        </Link>
        {isLoggedin ? (
          <>
            <Link to={"/mypage"}>
              <StBtnPosting>마이페이지</StBtnPosting>
            </Link>
            <StBtnSignIn onClick={handleLogoutClick}>로그아웃</StBtnSignIn>
          </>
        ) : (
          <StBtnSignIn onClick={handleLoginClick}>로그인</StBtnSignIn>
        )}
      </div>
      {showModal &&
        createPortal(
          <StModalBackdrop>
            <Signin
              handleLoginSuccess={handleLoginSuccess}
              setIsLoggedin={setIsLoggedin}
              closeModal={closeModal}
            />
          </StModalBackdrop>,
          document.getElementById("modal-root")
        )}
    </StHeader>
  );
}
export default Header;
const StLink = styled(Link)`
  text-decoration: none;
`;
const StHeader = styled.div`
  width: 100%;
  padding: 10px;
  margin: 60px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 2px solid #222;
`;
const StSpaceDiv = styled.div`
  margin-left: 150px;
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const StBtnPosting = styled.button`
  margin-right: 8px;
  background-color: #da3238;
  border-color: #da3238;
  color: white;
  font-size: 11px;
  font-weight: bold;
  border: none;
  box-shadow: none;
  border-radius: 0;
  width: 70px;
  height: 35px;
  &:active {
    filter: brightness(0.9);
  }
`;
const StBtnSignIn = styled(StBtnPosting)`
  margin-right: 8px;
  background-color: white;
  color: #222;
  border: 2px solid #d4d4d4;
`;
const StMainBtn = styled.span`
  background-color: white;
  color: #222;
  font-family: "Roboto", "Noto Sans KR", AppleSDGothicNeo-Regular,
    "Malgun Gothic", "맑은 고딕", dotum, "돋움", sans-serif;
  font-size: 22px;
  border: none;
  box-shadow: none;
  border-radius: 0;
  cursor: pointer;
  &:active {
    filter: brightness(0.9);
  }
`;
const StJoinTeamBtn = styled.span`
  background-color: white;
  color: #222;
  font-family: "Roboto", "Noto Sans KR", AppleSDGothicNeo-Regular,
    "Malgun Gothic", "맑은 고딕", dotum, "돋움", sans-serif;
  font-size: 15px;
  border: none;
  box-shadow: none;
  border-radius: 0;
  cursor: pointer;
  &:active {
    filter: brightness(0.9);
  }
  display: inline-flex;
  align-items: center;
  .material-symbols-outlined {
    vertical-align: middle;
  }
`;
const StLogoBtn = styled.span`
  border: none;
  box-shadow: none;
  background-color: white;
  cursor: pointer;
  color: black;
  text-decoration: none;
  font-size: 40px;
  font-weight: bold;
  &:active {
    filter: brightness(0.9);
  }
  &:hover {
    text-decoration: none;
  }
`;
const StEm = styled.em`
  display: inline-block;
  padding: 0.25em 0.375em;
  margin-bottom: 0.125em;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  color: #da3238;
  background-color: white;
  border: 1px solid #da3238;
  border-radius: 2px;
  transform: none;
`;
const StModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000; /* z-index 값을 증가시킵니다. */
`;