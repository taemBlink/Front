import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthApi } from "../shared/Api";
import axios from "axios";
import KakaoLogin from "react-kakao-login";
import { getUserData } from "../shared/Api";

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
        // 사용자 정보 요청
        // const userData = await getUserData(res.data.token);
        // console.log(userData); // 받아온 사용자 정보 활용 예시

        const expirationDate = new Date();
        const setCookie = `token ${res.token}`;
        expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000);
        document.cookie = `authorization=${encodeURIComponent(
          setCookie
        )}; expires=${expirationDate.toUTCString()}; path=/`;

        // if(!res || !res.token) {
        //   console.log('res : ' + res);
        //   console.log('res.token : ' + res.token);
        //   return;
        // }

        // 세선 스토리지에 이메일 저장
        // sessionStorage.setItem(
        //   "email",
        //   JSON.stringify(parseJwt(res.token).email)
        // );
        // sessionStorage.setItem("isSignIn", JSON.stringify(true));
        // alert("로그인에 성공했습니다.");

        closeModal();
        handleLoginSuccess();
        // 받아온 사용자 정보 활용 예시
      } catch (err) {
        alert(err.errorMessage || err.message);
      }

      // axios
      //     .post(
      //       "http://miniproject.ap-northeast-2.elasticbeanstalk.com/signin", // 미리 약속한 주소
      //       { Email:Email.value, password:password.value }, // 서버가 필요로 하는 데이터를 넘겨주고,
      //       { headers: {} } // 누가 요청했는 지 알려줍니다. (config에서 해요!)
      //     )
      //     .then(function (response) {
      //       console.log(response);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
    } else {
      alert("이메일 또는 비밀번호가 입력되지 않았습니다.");
      return;
    }
  };

  // const API_URL = process.env.REACT_APP_API_URL;
  // const KAKAO_ENDPOINT = `${API_URL}/kakao`;

  // const loginWithKakao = () => {
  //   const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URL}`;
  //   const CLIENT_ID = `${process.env.REACT_APP_RESTAPI_KAKAO_APP_KEY}`;
  //   const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  //   // const KAKAO_AUTH_URL = "http://54.180.142.54/kakao";
  //   window.location.href = KAKAO_AUTH_URL;
  // };
  // const kakaoClientId = `${process.env.REACT_APP_CLIENT_ID}`;

  // const kakaoOnSuccess = async (data) => {
  //   console.log(data);
  //   const idToken = data.response.id_token; // 인가코드 백엔드로 전달

  //   // Make an Axios request
  //   try {
  //     const response = await axios.get(KAKAO_ENDPOINT, {
  //       params: {
  //         idToken: idToken,
  //       },
  //     });
  //     console.log(response.data); // Handle the response from the backend

  //     // 로그인 성공 시 상태 업데이트
  //     setIsLoggedin(true);

  //     // 홈 화면으로 이동
  //     closeModal();
  //     handleLoginSuccess();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const kakaoOnFailure = (error) => {
  //   console.log(error);
  // };

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
        {/* <KakaoLogin
          onClick={() => loginWithKakao()}
          token={kakaoClientId}
          onSuccess={kakaoOnSuccess}
          onFail={kakaoOnFailure}
          render={({ onClick }) => (
            <img
              src={kakaoLoginButtonImgPath}
              alt="Kakao Login Button"
              onClick={onClick}
            />
          )}
        /> */}
        {/* <StBtn backgroundcolor="#82c8a0" type="button" onClick={closeModal}>
          닫기
        </StBtn> */}
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
