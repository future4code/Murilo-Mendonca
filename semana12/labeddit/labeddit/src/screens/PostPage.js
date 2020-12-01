import React from 'react'
import useProtectedPage from '../hooks/useProtectedPage'

function PostPage() {

    useProtectedPage();


  return (
    <div>
      <h1>Post Page</h1>
      <h3>página protegida</h3>
    </div>
  );
}

export default PostPage;