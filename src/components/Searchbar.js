import React from 'react';
import LocaleContext from '../contexts/LocaleContext';
import SearchContext from '../contexts/SearchContext';

function Searchbar() {
  const { locale } = React.useContext(LocaleContext);
  const { keyword, keywordChange } = React.useContext(SearchContext);

  return (
    <input
      className="is-close"
      type="text"
      placeholder={locale === 'id' ? 'Cari catatan' : 'Search notes'}
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

export default Searchbar;
