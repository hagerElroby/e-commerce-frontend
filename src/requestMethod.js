import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
 //const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTFhMWIxYWY4NDMyYWUxYTQ4NzFmMyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzU4MTgxNTIsImV4cCI6MTY3NjA3NzM1Mn0.EZx3Tws7UErs-XFrJmJI6GcuxWrwJepHxZjJRvYbwFI";

//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});