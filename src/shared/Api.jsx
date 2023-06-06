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
  signup: async (payload) => {
    const url = "/signup";
    const response = await api.post(url, payload);
    return response.data;
  },
  signin: async (payload) => {
    const response = await api.post("/login", payload);
    return response.data;
  },
  imgUpload: (payload) => api.post("/job/upload", payload),
  write: (payload, config) => api.post("/job/write", payload, { ...config }),
  findsido: () => api.get("/findsido"),
  getpost: () => api.get("/job"),
  getdetail: (job_id) => api.get(`/job/${job_id}`),
  getUserData: async (token) => {
    try {
      const response = await axios.get("/login", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("userdata:", response.data);
      // return response.data;
    } catch (error) {
      throw new Error("사용자 정보를 가져오는 중 오류가 발생했습니다.");
    }
  },
};
