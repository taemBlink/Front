import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthApi } from "../shared/Api";

// 토큰 디코드
const parseJwt = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

function SignIn() {
  const navigate = useNavigate();
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

        const expirationDate = new Date();
        const setCookie = `Bearer ${res.data.token}`;
        expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000);
        document.cookie = `authorization=${encodeURIComponent(
          setCookie
        )}; expires=${expirationDate.toUTCString()}; path=/`;

        // 세선 스토리지에 닉네임 저장
        sessionStorage.setItem(
          "email",
          JSON.stringify(parseJwt(res.data.token).email)
        );
        sessionStorage.setItem("isSignIn", JSON.stringify(true));
        alert("로그인에 성공했습니다.");
        navigate("/");
      } catch (err) {
        alert(err.response.data.errorMessage);
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
  return (
    <StContiner onSubmit={onSubmitHandler}>
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
      <div>
        <StBtn backgroundcolor="#6698cb" type="submit">
          로그인
        </StBtn>
        <Link to={"/signup"}>
          <StBtn backgroundcolor="#7fccde" type="button">
            회원가입
          </StBtn>
        </Link>
        <Link to={"/"}>
          <StBtn backgroundcolor="#82c8a0" type="button">
            뒤로가기
          </StBtn>
        </Link>
      </div>
    </StContiner>
  );
}
export default SignIn;

const StContiner = styled.form`
  max-width: 1200px;
  margin: 15px auto;
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: column;

  border: 3px solid black;
`;

const StBtn = styled.button`
  margin: 10px;
  background-color: ${(props) => props.backgroundcolor};
  position: relative;
  border: 0;
  padding: 15px 25px;
  display: inline-block;
  text-align: center;
  color: white;
  border-radius: 10px;
  &:active {
    background-color: white;
    color: black;
  }
`;
