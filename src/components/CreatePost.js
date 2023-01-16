import { useState, useRef, useContext } from 'react';
import { PostContext } from '../App';

function CreatePost({ user }) {
  const { dispatch } = useContext(PostContext);

  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const post = { content, image, user, id: Date.now() };
    dispatch({ type: 'ADD_POST', payload: { post } });
    setContent('');
    setImage(null);
    imageInputRef.current.value = '';
  }

  return (
    <>
      <h1>Create New Post:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={event => setContent(event.target.value)}
          placeholder='Add Post Content'
          value={content}
        />
        <input
          type='file'
          onChange={event => setImage(event.target.files[0])}
          ref={imageInputRef}
        />
        <button type='submit'>Submit Post</button>
      </form>
    </>
  );
}

export default CreatePost;
