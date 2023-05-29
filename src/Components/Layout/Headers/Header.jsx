import React, { useState } from "react";
import styled from "styled-components";
import Signin from "../../../Pages/Signin";
import Modal from "react-modal"; // Import the modal component from a library

Modal.setAppElement("#root"); // Set the root element for the modal

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
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
        <button>글쓰기</button>
        <button onClick={handleLoginClick}>로그인</button>{" "}
        {/* Handle login button click */}
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
      >
        <button onClick={closeModal}>닫기</button> {/* Close modal button */}
        <Signin /> {/* Render the Signin component inside the modal */}
      </Modal>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.div``;
