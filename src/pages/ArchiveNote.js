import React, {useEffect, useState} from 'react';
import {deleteNote, getArchivedNotes, unarchiveNote} from '../utils/api';
import NoteList from '../components/NoteList';

const ArchiveNote = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getArchivedNotes()
            .then(({data}) => {
                setNotes(data);
            });
    }, []);

    const onDeleteHandler = async (id) => {
        await deleteNote(id);

        getArchivedNotes()
            .then(({data}) => {
                setNotes(data);
            });
    }

    const onUnarchivedHandler = async (id) => {
       await unarchiveNote(id);

        getArchivedNotes()
            .then(({data}) => {
                setNotes(data);
            });
    }

    return (
        <section>
            <NoteList
                notes={notes}
                onDelete={onDeleteHandler}
                onUnarchived={onUnarchivedHandler}
            />
        </section>
    );
};

export default ArchiveNote;
