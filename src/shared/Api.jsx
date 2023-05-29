import axios from "axios";

// 싱글톤 패턴으로 axios 인스터스를 생성
export const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_SERVER_URL,
  headers: {
    /* */
  },
  withCredentials: true,
});

export const AuthApi = {
  // 회원정보 관련
  signup: (payload) => api.post("/signup", payload),
  signin: (payload) => api.post("/signin", payload),
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
