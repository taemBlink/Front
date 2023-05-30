import React, { useEffect } from "react";
import axios from "axios";

const KakaoCallback = () => {
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분
    let grant_type = "authorization_code";
    const CLIENT_ID = `${process.env.REACT_APP_RESTAPI_KAKAO_APP_KEY}`;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?
        grant_type=${grant_type}
        &client_id=${CLIENT_ID}
        &redirect_uri=http://localhost:3000/oauth
        &code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
      });
  }, []);

  return <div></div>;
};

export default KakaoCallback;
