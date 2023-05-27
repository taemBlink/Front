import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthApi } from "../shared/Api";

// 이메일 정규식
const emailRegex =
  /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

// 이름 정규식
const kornameRegex = /^[가-힣]{2,4}$/;
// 한글 이름 2~4자 이내

// 비밀번호 정규식
const passwordRegex = /^.{4,}$/;

// 오류 메세지
const alertMessage = {
  nameErr: "이름 규칙에 어긋납니다! (한글을 사용하여 2글자 이상)",
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
  const [korName, setkorName] = useState({
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

  const onEmailChangeHandler = (event) => {
    const inputEmail = event.target.value;
    setkorName((prevEmail) => ({
      ...prevEmail,
      value: inputEmail,
    }));
  };

  const onkorNameChangeHandler = (event) => {
    const inputkorName = event.target.value;
    setkorName((prevkorName) => ({
      ...prevkorName,
      value: inputkorName,
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
    const verifiedEmail = emailRegex.test(korName.value);
    const verifiedkorname = kornameRegex.test(korName.value);
    const verifiedPassword = passwordRegex.test(password.value);
    const verifiedConfirmPassword = password.value === confirmPassword.value;

    setEmail((prevEmail) => ({
      ...prevEmail,
      err: !verifiedEmail,
    }));

    setkorName((prevkorName) => ({
      ...prevkorName,
      err: !verifiedkorname,
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
    return !verifiedkorname || !verifiedPassword || !verifiedConfirmPassword
      ? false
      : true;
  };
  const onSubmitHandler = async () => {
    const signUpVerfy = verifySiginUpData();
    if (signUpVerfy) {
      // 회원 가입 요청 가능

      try {
        const res = await AuthApi.signup({
          email: email.value,
          password: password.value,
        });
        alert(res.data.message);
        navigate("/");
      } catch (err) {
        alert(err.response.data.errorMessage);
      }

      // axios
      //   .post(
      //     serverDomain+"/signup", // 미리 약속한 주소
      //     { korname:korName.value, password:password.value }, // 서버가 필요로 하는 데이터를 넘겨주고,
      //     { headers: {} } // 누가 요청했는 지 알려줍니다. (config에서 해요!)
      //   )
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      return;
    } else {
      // 회원가입 부적합으로 함수 종료
      return;
    }
  };
  return (
    <StSignupContainer>
      <Title>
        <h1>회원가입</h1>
        <div>일반회원</div>
      </Title>
      <label>
        이메일 :
        <StAlertBox>{email.err ? alertMessage.emailErr : null}</StAlertBox>
      </label>
      <input
        type="text"
        placeholder="My name"
        onChange={onEmailChangeHandler}
      />
      <label>
        이름 :
        <StAlertBox>{korName.err ? alertMessage.nameErr : null}</StAlertBox>
      </label>
      <input
        type="text"
        placeholder="My name"
        onChange={onkorNameChangeHandler}
      />
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

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

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
