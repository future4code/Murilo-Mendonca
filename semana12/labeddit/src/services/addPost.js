import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToFeedPage } from "../routes/Coordinator";

const addPost = (body, history) => {
  const token = localStorage.getItem("token");

  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      goToFeedPage(history);
      console.log(response);
    })
    .catch((error) => {
      alert("tente novamente");
      console.log(error.message);
    });
};

export default addPost;
