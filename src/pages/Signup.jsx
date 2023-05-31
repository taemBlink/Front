import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthApi } from "../shared/Api";

// 이메일 정규식
const emailRegex =
  /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

// 이름 정규식
// const kornameRegex = /^[가-힣]{2,4}$/;
// 한글 이름 2~4자 이내

// 닉네임 정규식
const nicknameRegex = /^[A-Za-z0-9]{3,}$/;

// 비밀번호 정규식
const passwordRegex = /^.{4,}$/;

// 오류 메세지
const alertMessage = {
  // nameErr: "이름 규칙에 어긋납니다! (한글을 사용하여 2글자 이상)",
  nickErr: "닉네임 규칙에 어긋납니다! (영문과 숫자를 사용하여 3글자 이상)",
  pwErr: "비밀번호 규칙에 어긋납니다!!(4글자 이상)",
  pwMachErr: "패스워드가 불일치합니다.",
  signinUpComplete: "회원가입에 성공했습니다.",
  signinUpFail: "어라? 뭔가 문제가 생긴 것 같아요!",
};

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState({
    value: "",
    err: null,
  });
  // const [korName, setkorName] = useState({
  //   value: "",
  //   err: null,
  // });

  const [nickName, setNickName] = useState({
    value: "",
    err: null,
  });

  const [companyName, setCompanyName] = useState({
    value: "",
    err: null,
  });

  const [password, setPassword] = useState({
    value: "",
    err: null,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    err: null,
  });

  const [userType, setUserType] = useState("regular"); // Default user type is regular

  const onEmailChangeHandler = (event) => {
    const inputEmail = event.target.value;
    setEmail((prevEmail) => ({
      ...prevEmail,
      value: inputEmail,
    }));
  };

  // const onkorNameChangeHandler = (event) => {
  //   const inputkorName = event.target.value;
  //   setkorName((prevkorName) => ({
  //     ...prevkorName,
  //     value: inputkorName,
  //   }));
  // };

  const onNickNameChangeHandler = (event) => {
    const inputNickName = event.target.value;
    setNickName((prevNickName) => ({
      ...prevNickName,
      value: inputNickName,
    }));
  };

  const onPasswordChangeHandler = (event) => {
    const inputPassword = event.target.value;
    setPassword((prevPassword) => ({
      ...prevPassword,
      value: inputPassword,
    }));
  };

  const onConfirmPasswordChangeHandler = (event) => {
    const inputConfirmPassword = event.target.value;
    setConfirmPassword((prevConfimPw) => ({
      ...prevConfimPw,
      value: inputConfirmPassword,
    }));
  };

  const verifySiginUpData = () => {
    // 유효성 검사 결과 저장
    const verifiedEmail = emailRegex.test(email.value);
    // const verifiedkorname = kornameRegex.test(korName.value);
    const verifiedNickname = nicknameRegex.test(nickName.value);
    const verifiedPassword = passwordRegex.test(password.value);
    const verifiedConfirmPassword = password.value === confirmPassword.value;

    setEmail((prevEmail) => ({
      ...prevEmail,
      err: !verifiedEmail,
    }));

    // setkorName((prevkorName) => ({
    //   ...prevkorName,
    //   err: !verifiedkorname,
    // }));

    setNickName((prevNickName) => ({
      ...prevNickName,
      err: !verifiedNickname,
    }));
    // 비밀번호 유효성 검사
    setPassword((prevPassword) => ({
      ...prevPassword,
      err: !verifiedPassword,
    }));
    // 비밀번호 재입력 일치 여부 검사
    setConfirmPassword((prevConfimPw) => ({
      ...prevConfimPw,
      err: !verifiedConfirmPassword,
    }));
    return !verifiedNickname || !verifiedPassword || !verifiedConfirmPassword
      ? false
      : true;
  };
  const onSubmitHandler = async () => {
    const signUpVerfy = verifySiginUpData();
    if (signUpVerfy) {
      try {
        if (userType === "regular") {
          const res = await AuthApi.signup({
            email: email.value,
            password: password.value,
            userType: "regular",
            nickname: nickName.value, // Add nickname to signup data for regular users
          });
          alert(res.data.message);
        } else if (userType === "hr") {
          const res = await AuthApi.signup({
            email: email.value,
            password: password.value,
            userType: "hr",
            companyName: nickName.value, // Add companyName to signup data for HR managers
          });
          alert(res.data.message);
        }

        navigate("/");
      } catch (err) {
        alert(err.response.data.errorMessage);
      }
    } else {
      return;
    }
  };

  return (
    <StSignupContainer>
      <h1>회원가입</h1>

      <label>
        사용자 유형:
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="regular">일반회원</option>
          <option value="hr">인사담당자</option>
        </select>
      </label>

      <label>
        이메일 :
        <StAlertBox>{email.err ? alertMessage.emailErr : null}</StAlertBox>
      </label>
      <input type="text" placeholder="e-mail" onChange={onEmailChangeHandler} />
      {/* <label>
        닉네임 :
        <StAlertBox>{nickName.err ? alertMessage.nickErr : null}</StAlertBox>
      </label> */}
      <label>
        {userType === "hr" ? "회사명" : "닉네임"} :
        <StAlertBox>{nickName.err ? alertMessage.nickErr : null}</StAlertBox>
      </label>
      <input
        type="text"
        placeholder={userType === "hr" ? "My Company Name" : "My Nickname"}
        onChange={onNickNameChangeHandler}
      />
      {/* <input
        type="text"
        placeholder="My Nickname"
        onChange={onNickNameChangeHandler}
      /> */}
      {/* <label>
        이름 :
        <StAlertBox>{korName.err ? alertMessage.nameErr : null}</StAlertBox>
      </label>
      <input
        type="text"
        placeholder="My name"
        onChange={onkorNameChangeHandler}
      /> */}
      <label>
        비밀번호 :
        <StAlertBox>{password.err ? alertMessage.pwErr : null}</StAlertBox>
      </label>
      <input
        type="password"
        placeholder="Password"
        onChange={onPasswordChangeHandler}
      />
      <label>
        비밀번호 재입력 :
        <StAlertBox>
          {confirmPassword.err ? alertMessage.pwMachErr : null}
        </StAlertBox>
      </label>
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={onConfirmPasswordChangeHandler}
      />
      <div>
        <StBtn backgroundcolor="#7fccde" onClick={onSubmitHandler}>
          회원가입
        </StBtn>
        <Link to={"/"}>
          <StBtn backgroundcolor="#fa5a5a">취소</StBtn>
        </Link>
      </div>
    </StSignupContainer>
  );
}
export default Signup;

const StSignupContainer = styled.div`
  max-width: 1200px;
  margin: 15px auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: column;
  border: 3px solid black;
  /* Modal styles */
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
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

const StAlertBox = styled.div`
  color: tomato;
  font-weight: bold;
`;
