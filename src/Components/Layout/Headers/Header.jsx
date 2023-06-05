import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Signin from "../../../Pages/Signin";
import { createPortal } from "react-dom";
function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userType, setUserType] = useState("");
  const handleLoginClick = () => {
    setShowModal(true);
  };
  const handleLogoutClick = () => {
    setIsLoggedin(false); // 상태 업데이트
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleLoginSuccess = () => {
    setIsLoggedin(true); // 상태 업데이트
    closeModal(); // 로그인 성공 후 모달 닫기
  };
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
      <div
        style={{ display: "flex", marginLeft: "auto", alignItems: "center" }}
      >
        <StJoinTeamBtn>팀블링크 채용</StJoinTeamBtn>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to={"/posting"}>
          {userType !== "regular" && ( // userType이 "regular"이 아닐 때에만 글쓰기 버튼을 표시합니다.
            <StBtnPosting>글쓰기</StBtnPosting>
          )}
        </Link>
        {isLoggedin ? (
          <>
            <StBtnPosting>마이페이지</StBtnPosting>
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
  width: 1200px;
  padding: 10px;
  margin: 60px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 2px solid #222;
`;
const StSpaceDiv = styled.div`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const StBtnPosting = styled.button`
  margin-right: 8px;
  background-color: #DA3238;
  border-color: #DA3238;
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
  border: 2px solid #D4D4D4;
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
  color: #DA3238;
  background-color: white;
  border: 1px solid #DA3238;
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