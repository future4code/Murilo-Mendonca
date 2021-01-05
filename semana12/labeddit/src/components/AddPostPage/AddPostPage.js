import React from "react";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useForm } from "../../hooks/useForm";
import { AddPostContainer } from "./styles";
import addPost from "../../services/addPost";

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

const AddPost = () => {
  useProtectedPage();
  const history = useHistory();
  const { form, onChange } = useForm({ text: "", title: "" });
  const classes = useStyles();

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    addPost(form, history);
  };

  return (
    <AddPostContainer>
      <form className={classes.form} onSubmit={handleSubmission}>
        <TextField
          label="Title"
          placeholder="Title"
          name={"title"}
          value={form.title}
          onChange={handleInputChange}
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />
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
          Create Post
        </Button>
      </form>
    </AddPostContainer>
  );
};

export default AddPost;
