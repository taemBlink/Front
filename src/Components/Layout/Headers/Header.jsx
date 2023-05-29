import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Signin from "../../../Pages/Signin";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  const closeModal = () => {
    setShowModal(false);
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
        <StMainBtn>채용 공고</StMainBtn>
      </StSpaceDiv>
      <div>
        <StJoinTeamBtn>팀 블링크 채용</StJoinTeamBtn>
      </div>
      <div>
        <button>팀 블링크 채용</button>
      </div>
      <Link to={"/posting"}>
        <StBtnPosting>글쓰기</StBtnPosting>
      </Link>
      <div>
        {isLoggedIn ? (
          <>
            <button>마이페이지</button>
            <button onClick={handleLogoutClick}>로그아웃</button>
          </>
        ) : (
          <StBtnSignIn onClick={handleLoginClick}>로그인</StBtnSignIn>
        )}
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
      >
        <button onClick={closeModal}>닫기</button>
        <Signin handleLoginSuccess={() => setIsLoggedIn(true)} />
      </Modal>
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
  font-size: 13px;
  font-weight: bold;
  border: none;
  box-shadow: none;
  border-radius: 0;
  width: 60px;
  height: 30px;
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
