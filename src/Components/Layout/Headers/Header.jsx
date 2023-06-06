import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Signin from "../../../Pages/Signin";
import { createPortal } from "react-dom";
import { AuthApi } from "../../../shared/Api";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userType, setUserType] = useState("");
  // const [token, setToken] = useState(""); // 토큰 상태 추가

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedin(false);
    localStorage.removeItem("token"); // 로그아웃 시 로컬 스토리지의 토큰 제거
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLoginSuccess = (token) => {
    setIsLoggedin(true);
    localStorage.setItem("token", token); // 로그인 성공 시 토큰을 로컬 스토리지에 저장
    closeModal();
  };

  useEffect(() => {
    const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기

    if (token) {
      // 토큰이 존재하면 로그인 상태로 설정
      setIsLoggedin(true);
    }

    // 로그인 상태와 토큰이 모두 있는 경우에만 사용자 데이터 호출
    if (isLoggedin && token) {
      const fetchUserData = async () => {
        try {
          const res = await AuthApi.getUserData(token);
          setUserType(res.userType);
        } catch (error) {
          console.error(
            "사용자 정보를 가져오는 중 오류가 발생했습니다.",
            error
          );
        }
      };
      fetchUserData();
    }
  }, [isLoggedin]);

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
        <StJoinTeamBtn>팀블링크 채용</StJoinTeamBtn>&nbsp;
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
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
