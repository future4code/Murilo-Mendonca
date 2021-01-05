export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goToSignUpPage = (history) => {
  history.push("/signup");
};

export const goToFeedPage = (history) => {
  history.push("/posts");
};

export const goToDetailsFeedPage = (history, id) => {
  history.push(`/posts/${id}`);
};
