import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AddCommentContainer } from "./style";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import { goToFeedPage } from "../../routes/Coordinator";

//Material UI imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Material UI
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AddCommentCard = () => {
  const history = useHistory();
  const params = useParams();
  const { form, onChange } = useForm({ text: "" });
  const classes = useStyles();

  const addComment = (body, history) => {
    const token = localStorage.getItem("token");

    axios
      .post(`${BASE_URL}/posts/${params.postId}/comment`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response);
        goToFeedPage(history);
      })
      .catch((error) => {
        alert("tente novamente");
        console.log(error.message);
      });
  };

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    addComment(form, history);
    console.log(form);
  };

  return (
    <AddCommentContainer>
      <h3>ADD COMMENT</h3>
      <form className={classes.form} onSubmit={handleSubmission}>
        <TextField
          label="Text"
          name={"text"}
          placeholder="Text"
          value={form.text}
          onChange={handleInputChange}
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          type="submit"
        >
          Create Comment
        </Button>
      </form>
    </AddCommentContainer>
  );
};

export default AddCommentCard;
