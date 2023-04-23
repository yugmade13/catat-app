import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle, AiOutlineCheck } from 'react-icons/ai';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocaleContext';

const Form = styled.form`
  
  div {
    display: flex;
    align-items: start;
    margin: 4px 0;
  }
  
  input {
    width: 100%;
    font-size: 42px;
    font-family: 'Source Serif Pro', sans-serif;
    background: #fff;
  }
  
  textarea {
    width: 100%;
    height: 400px;
    font-size: 21px;
    font-family: 'Source Serif Pro', sans-serif;
    background: #fff;
  }
  
  button {
    position: absolute;
    right: 32px;
    bottom: 32px;
    padding: 12px;
    border-radius: 50%;
    
    svg {
      font-size: 24px;
    }
  }
  
  button:hover {
    background: rgb(255, 192, 23);
  }
`;

function NoteInput({ addNote }) {
  const { locale } = React.useContext(LocaleContext);

  const [title, handleTitleChange] = useInput('');
  const [body, handleBodyChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addNote({ title, body });
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="title"><AiOutlinePlusCircle /></label>
        <input
          id="title"
          type="text"
          placeholder={locale === 'id' ? 'Judul' : 'Title'}
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="body"><AiOutlinePlusCircle /></label>
        <textarea
          id="body"
          placeholder={locale === 'id' ? 'Ceritakan kisahmu..' : 'Tell your story'}
          value={body}
          onChange={handleBodyChange}
        />
      </div>
      <button type="submit">
        <AiOutlineCheck />
      </button>
    </Form>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
