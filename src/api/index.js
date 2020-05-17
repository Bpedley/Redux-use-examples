import Axios from "axios";

const instance = Axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com/posts"
});

export const API = {
  getPosts() {
    return instance
      .get()
      .then(response => response)
      .catch(error => error.message);
  },
  createPost({ title, body }) {
    return instance
      .post(null, { title, body })
      .then(response => response)
      .catch(error => error.message);
  }
};
