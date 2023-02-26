import axios from "axios";

export const Postsdata = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      if (res.status) {
        return res?.data
      }
    })
    .catch((err) => {
      return err
    })
}

export const SinglePostsdata = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
      if (res.status) {
        console.log("resnik",res.data);
        return res?.data
      }
    })
    .catch((err) => {
      return err
    })
}