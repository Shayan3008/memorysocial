import axios from "axios";

const url = "http://localhost:3001/post"
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
};
const fetchPost = () => axios.get(url, config)
const createNewPost = (post) => axios.post(url, post)
export { fetchPost, createNewPost }