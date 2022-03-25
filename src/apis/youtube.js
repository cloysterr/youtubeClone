import axios from "axios";

const KEY = "AIzaSyD9FkEUnX4ImO0e4chrWgw1rh4Sqb2FNRs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
