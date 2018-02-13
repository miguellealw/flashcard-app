import axios from "axios";

async function login(postBody) {
  try {
    const res = await axios.post("/api/v1/user/login", postBody);
    if (res.statusText === "OK") return res.data;
  } catch (error) {
    console.log('failed login service')
    throw error;
  }
}

async function signup(postBody) {
  try {
    const res = await axios.post("/api/v1/user/signup", postBody);
    if (res.statusText === "Created") return res.data;
  } catch (error) {
    throw error;
  }
}

async function fetchCurrentUser() {
  try {
    const res = await axios.get("/api/v1/user/current_user");
    if (res.statusText === "OK") return res.data;
  } catch (error) {
    throw error;
  }
}

async function logout() {
  try {
    await axios.get("/api/v1/user/logout");
  } catch (error) {
    throw error;
  }
}

export default { login, signup, logout, fetchCurrentUser };
