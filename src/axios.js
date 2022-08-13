import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-eddf8/us-central1/api", // THE API (cloud function) URL
  //Add firebase API
});

export default instance;
