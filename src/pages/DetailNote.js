import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getNote } from '../utils/api';
import { showFormattedDate } from '../utils';
import { Loading } from '../styles/component-style';

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  
  h2 {
    font-size: 32px;
    padding: 24px 0;
    text-align: center;
  }
  
  p {
    font-size: 16px;
    margin-bottom: 32px;
    text-justify: inter-character;
  }
`;

function DetailNote() {
  const { id } = useParams();
  const [note, setNote] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading((prevState) => !prevState);
    getNote(id)
      .then(({ data }) => {
        setNote(data);
        setIsLoading((prevState) => !prevState);
      });
  }, []);

  if (isLoading) {
    return (
      <Loading>
        <p>Loading...</p>
      </Loading>
    );
  }

  return (
    <section>
      <Detail>
        <h2>{note.title}</h2>
        <p>{note.body}</p>
        <span>{showFormattedDate(note.createdAt)}</span>
      </Detail>
    </section>
  );
}

export default DetailNote;
