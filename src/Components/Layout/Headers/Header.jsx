import React, { useState } from "react";
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
        {isLoggedIn ? (
          <>
            <button>글쓰기</button>
            <button>마이페이지</button>
            <button onClick={handleLogoutClick}>로그아웃</button>
          </>
        ) : (
          <button onClick={handleLoginClick}>로그인</button>
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

const StHeader = styled.div``;
