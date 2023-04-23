import React, { useEffect, useState } from 'react';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/api';
import NoteList from '../components/NoteList';
import SearchContext from '../contexts/SearchContext';
import Searchbar from '../components/Searchbar';
import { Loading } from '../styles/component-style';

function Home() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { keyword } = React.useContext(SearchContext);

  const filteredNotes = notes.filter(({ title }) => title.toLowerCase().includes(keyword.toLowerCase()));

  useEffect(() => {
    setIsLoading((prevState) => !prevState);
    getActiveNotes()
      .then(({ data }) => {
        setNotes(data);
        setIsLoading((prevState) => !prevState);
      });
  }, []);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);

    getActiveNotes()
      .then(({ data }) => {
        setNotes(data);
      });
  };

  const onArchivedHandler = async (id) => {
    await archiveNote(id);

    getActiveNotes()
      .then(({ data }) => {
        setNotes(data);
      });
  };

  if (isLoading) {
    return (
      <Loading>
        <p>Loading...</p>
      </Loading>
    );
  }

  return (
    <section>
      <div className="search">
        <Searchbar />
      </div>
      <NoteList
        notes={filteredNotes}
        onDelete={onDeleteHandler}
        onArchived={onArchivedHandler}
      />
    </section>
  );
}

export default Home;
