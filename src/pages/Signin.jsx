import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthApi } from "../shared/Api";

function Signin({ handleLoginSuccess, setIsLoggedin, closeModal }) {
  const [email, setEmail] = useState({
    value: "",
    err: null,
  });
  const [password, setPassword] = useState({
    value: "",
    err: null,
  });

  const onEmailChangeHandler = (event) => {
    const inputEmail = event.target.value;
    setEmail((prevEmail) => ({
      ...prevEmail,
      value: inputEmail,
    }));
  };

  const onPasswordChangeHandler = (event) => {
    const inputPassword = event.target.value;
    setPassword((prevPassword) => ({
      ...prevPassword,
      value: inputPassword,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (email.value && password.value) {
      try {
        const res = await AuthApi.signin({
          email: email.value,
          password: password.value,
        });
        console.log(res);

        const expirationDate = new Date();
        const setCookie = `token ${res.token}`;
        expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000);
        document.cookie = `authorization=${encodeURIComponent(
          setCookie
        )}; expires=${expirationDate.toUTCString()}; path=/`;

        closeModal();
        handleLoginSuccess();
        // 받아온 사용자 정보 활용 예시
      } catch (err) {
        alert(err.errorMessage || err.message);
      }
    } else {
      alert("이메일 또는 비밀번호가 입력되지 않았습니다.");
      return;
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링(stopPropagation)을 사용하여 부모 요소로의 이벤트 전파를 막습니다.
    closeModal();
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        event.stopPropagation();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const kakaoLoginButtonImgPath = "/kakao_login_medium_narrow.png";

  // handleLoginSuccess(res.token);
  return (
    <StContiner
      ref={modalRef}
      onSubmit={onSubmitHandler}
      onClick={(e) => e.stopPropagation()}
    >
      <StCloseButton onClick={handleCloseClick}>X</StCloseButton>
      <h1>로그인</h1>

      <label>이메일</label>
      <input
        type="text"
        value={email.value}
        placeholder="Type your Email"
        onChange={onEmailChangeHandler}
      />
      <label>비밀번호</label>
      <input
        type="password"
        value={password.value}
        placeholder="Type your Password"
        onChange={onPasswordChangeHandler}
      />
      <div style={{ display: "flex", gap: "7px", marginTop: "15px" }}>
        <StBtnSubmit backgroundcolor="#6698cb" type="submit">
          로그인
        </StBtnSubmit>

        <Link to={"/signup"}>
          <StBtnCancel backgroundcolor="#7fccde" type="button">
            회원가입
          </StBtnCancel>
        </Link>
        <div className="App">
          <a href="http://api.ysizuku.com/kakao">
            <img src={kakaoLoginButtonImgPath} />{" "}
          </a>
        </div>
      </div>
    </StContiner>
  );
}

export default Signin;

const StContiner = styled.form`
  width: 600px;
  height: 800px; /* Adjust the height value as per your preference */
  overflow-y: auto;
  margin: 70px auto;
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: column;

  /* Reduce the height of the white background */
  background-color: white;
  height: 50vh; /* Adjust the height value as per your preference */
  overflow-y: auto;
`;

const StBtnSubmit = styled.button`
  margin-right: 8px;
  background-color: #da3238;
  border-color: #da3238;
  color: white;
  font-size: 13px;
  font-weight: bold;
  border: none;
  box-shadow: none;
  border-radius: 0;
  width: 90px;
  height: 45px;
  &:active {
    filter: brightness(0.9);
  }
`;

const StBtnCancel = styled(StBtnSubmit)`
  margin-right: 8px;
  background-color: white;
  color: #222;
  border: 2px solid #d4d4d4;
`;

const StCloseButton = styled.button`
  position: absolute;
  top: 80px;
  right: 450px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: black;
`;
