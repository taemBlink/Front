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
    setIsLoggedin(false); // Update state
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedin(true); // Update state
    closeModal(); // Close modal after successful login
  };

  return (
    <StHeader>
      <StSpaceDiv>
        <Link to={"/"}>
          <StLogoBtn>Blink Logo</StLogoBtn>
        </Link>
        <Link to={"/"}>
          <StMainBtn>홈</StMainBtn>
        </Link>
        <Link to={"/job"}>
          <StMainBtn>채용 공고</StMainBtn>
        </Link>
      </StSpaceDiv>
      <div>
        <StJoinTeamBtn>팀 블링크 채용</StJoinTeamBtn>
      </div>

      <div>
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
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

const StMainBtn = styled.button`
  background-color: white;
  color: #222;
  font-family: "Roboto", "Noto Sans KR", AppleSDGothicNeo-Regular,
    "Malgun Gothic", "맑은 고딕", dotum, "돋움", sans-serif;
  font-size: 16px;
  border: none;
  box-shadow: none;
  border-radius: 0;
  cursor: pointer;
  &:active {
    filter: brightness(0.9);
  }
`;

const StJoinTeamBtn = styled(StMainBtn)`
  font-weight: bold;
`;

const StLogoBtn = styled.button`
  border: none;
  box-shadow: none;
  background-color: white;
  cursor: pointer;
  &:active {
    filter: brightness(0.9);
  }
`;

const StModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000; /* Increase the z-index value */
`;
