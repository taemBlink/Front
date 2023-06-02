import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../Pages/Home";
import Posting from "../Pages/Posting";
import PostList from "../Pages/PostList";
import Detailpage from "../Components/Layout/Bodies/Deitail/Detailpage";
import Signup from "../Pages/Signup";
import Mypage from "../Pages/Mypage";
import Signin from "../Pages/Signin";
import Home from "../Pages/Home";
// import KakaoCallback from "../Components/features/Kakao/KakaoCallback";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job" element={<PostList />} />
        <Route path="posting" element={<Posting />} />
        {/* <Route path="/job/:job_id" element={<PostList />} /> */}
        <Route path="/job/detail/:job_id" element={<Detailpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/mypage/:user_id" element={<Mypage />} />
        <Route path="/oauth" element={<Signin />} />
        {/* <Route path="/postlist" element={<PostList />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
