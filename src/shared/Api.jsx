export const signUp = async (userInfo) => {
  try {
    await axios.post("/api/signup", userInfo);
  } catch (error) {
    console.log("SingUp Error : ", error);
    throw error;
  }
};
