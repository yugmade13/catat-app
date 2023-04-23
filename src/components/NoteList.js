import React from 'react';
import styled from 'styled-components';
import { ImFilesEmpty } from 'react-icons/im';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

const EmptyFile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  
  h2 {
    font-size: 32px;
    color: #e5e7eb;
  }
  
  svg {
    font-size: 72px;
    color: #e5e7eb;
  }
`;

function NoteList({
  notes, onDelete, onArchived, onUnarchived,
}) {
  if (notes.length === 0) {
    return (
      <EmptyFile>
        <div>
          <ImFilesEmpty />
          <h2>Tidak ada catatan</h2>
        </div>
      </EmptyFile>
    );
  }

  return (
    <div className="flex flex-column">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          onDelete={onDelete}
          onArchived={onArchived}
          onUnarchived={onUnarchived}
        />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchived: PropTypes.func,
  onUnarchived: PropTypes.func,
};

export default NoteList;
