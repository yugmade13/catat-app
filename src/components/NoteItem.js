import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsBoxSeam, BsBox } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { showFormattedDate, showFormattedText } from '../utils';

const Item = styled.div`
  padding-bottom: 16px;
  
  h3 {
    font-size: 22px;
    line-height: 28px;
    padding-bottom: 8px;
    
    a {
      color: #252525;
    }
    
    a:hover {
      color: #757575;
    }
  }
  
  p {
    font-size: 16px;
  }
  
  div {
    padding: 32px 0 16px;
    border-bottom: 1px solid #000;
  }
`;

function NoteItem({
  id, title, body, createdAt, archived, onDelete, onArchived, onUnarchived,
}) {
  return (
    <Item>
      <h3>
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p>{`${showFormattedText(body)}...`}</p>
      <div className="flex flex-center flex-between">
        <span>{showFormattedDate(createdAt)}</span>
        <ul className="flex flex-gap">
          {archived
            ? (<li onClick={() => onUnarchived(id)}><BsBoxSeam /></li>)
            : (<li onClick={() => onArchived(id)}><BsBox /></li>)}
          <li onClick={() => onDelete(id)}>
            <AiOutlineDelete />
          </li>
        </ul>
      </div>
    </Item>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchived: PropTypes.func,
  onUnarchived: PropTypes.func,
};

export default NoteItem;
