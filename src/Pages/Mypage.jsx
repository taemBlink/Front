import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthApi } from "../shared/Api";

function Mypage() {
  const { user_id } = useParams(); // 동적인 ":user_id" 값을 가져옴
  const [nickname, setNickname] = useState("");
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    // 회원 정보 가져오기
    const fetchUserInfo = async () => {
      try {
        const res = await AuthApi.getUserInfo(user_id); // user_id를 사용하여 회원 정보 가져오기
        const { userType, nickname, companyName } = res.data;
        if (userType === "regular") {
          setNickname(nickname);
        } else if (userType === "hr") {
          setCompanyName(companyName);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserInfo();
  }, [user_id]); // user_id가 변경될 때마다 useEffect가 호출되도록 설정

  return (
    <div>
      {nickname && <p>닉네임: {nickname}</p>}
      {companyName && <p>회사명: {companyName}</p>}
    </div>
  );
}

export default Mypage;
