import React from 'react';
import {useNavigate} from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import {addNote} from '../utils/api';

const AddNote = () => {
    const navigate = useNavigate();

    const onAddNoteHandler = async ({title, body}) => {
        await addNote({title, body});

        navigate('/');
    }
    return (
        <section>
            <NoteInput addNote={onAddNoteHandler}/>
        </section>
    );
};

export default AddNote;
