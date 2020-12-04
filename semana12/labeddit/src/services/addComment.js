import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToDetailsFeedPage } from "../routes/Coordinator";

const addComment = (body, history) => {
  const token = localStorage.getItem("token");

  axios
    .post(`${BASE_URL}/posts/:postId/comment`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then(() => {
      goToDetailsFeedPage(history);
    })
    .catch((error) => {
      alert(error.message);
    });
};

export default addComment;
