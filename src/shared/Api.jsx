import axios from "axios";

// 싱글톤 패턴으로 axios 인스터스를 생성
export const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_SERVER_URL,
  headers: {
    /* */
  },
  withCredentials: true,
});

// export const AuthApi = {
//   // 회원정보 관련
//   signup: (payload) => api.post("/signup", payload),
//   signin: (payload) => api.post("/login", payload),
// };
export const AuthApi = {
  signup: (payload) => {
    const userType = payload.user_type; // 사용자 유형 (인사담당자 또는 일반회원)
    const url = userType === "인사담당자" ? "/signup/hr" : "/signup/regular";
    return api.post(url, payload);
  },
  signin: (payload) => {
    const userType = payload.user_type; // 사용자 유형 (인사담당자 또는 일반회원)
    const url = userType === "인사담당자" ? "/login/hr" : "/login/regular";
    return api.post(url, payload);
  },
  imgUoload: (payload) => api.post("/job/upload", payload),
  write: (payload)=> api.post("/job/write", payload)
};

export const getUserData = async (token) => {
  try {
    const response = await axios.get("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("사용자 정보를 가져오는 중 오류가 발생했습니다.");
  }
};
