import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthApi } from "../shared/Api";

function Mypage() {
  const { user_id } = useParams(); // 동적인 ":user_id" 값을 가져옴
  const [name, setName] = useState("");
  const [company, setCompanyName] = useState("");

  useEffect(() => {
    // 회원 정보 가져오기
    const fetchUserInfo = async () => {
      try {
        const res = await AuthApi.getmypage(user_id); // user_id를 사용하여 회원 정보 가져오기
        const { user_type, name, company } = res.data;
        if (user_type === "regular") {
          setName(name);
          console.log("setname:", name);
        } else if (user_type === "hr") {
          setCompanyName(company);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserInfo();
  }, [user_id]); // user_id가 변경될 때마다 useEffect가 호출되도록 설정

  return (
    <div key={user_id}>
      {name && <p>이름: {name}</p>}
      {company && <p>회사명: {company}</p>}
    </div>
  );
}

export default Mypage;
