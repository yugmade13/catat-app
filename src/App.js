import React, { useState, useMemo, useEffect } from 'react';
import {
  Routes, Route, useNavigate, useSearchParams,
} from 'react-router-dom';
import { putAccessToken, getUserLogged } from './utils/api';
import Layout from './pages/Layout';
import Home from './pages/Home';
import AddNote from './pages/AddNote';
import ArchiveNote from './pages/ArchiveNote';
import DetailNote from './pages/DetailNote';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthContext from './contexts/AuthContext';
import LocaleContext from './contexts/LocaleContext';
import ThemeContext from './contexts/ThemeContext';
import SearchContext from './contexts/SearchContext';

function App() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get('keyword');
  const onChangeParams = (keyword) => {
    setSearchParams({ keyword });
  };

  const [auth, setAuth] = useState(null);
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [keyword, setKeyword] = useState(defaultKeyword || '');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleLocale = () => {
    setLocale((prevState) => {
      const newLocale = prevState === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);

      return newLocale;
    });
  };

  const toggleTheme = () => {
    setTheme((prevState) => {
      const newTheme = prevState === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);

      return newTheme;
    });
  };

  const keywordChange = (key) => {
    setKeyword(key);
    onChangeParams(key);
  };

  const authChange = (data) => {
    setAuth(data);
  };

  const authContextValue = useMemo(() => ({
    auth,
    authChange,
  }), [auth]);

  const localeContextValue = useMemo(() => ({
    locale,
    toggleLocale,
  }), [locale]);

  const themeContextValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  const keywordContextValue = useMemo(() => ({
    keyword,
    keywordChange,
  }), [keyword]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();
    setAuth(data);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <SearchContext.Provider value={keywordContextValue}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/archives" element={<ArchiveNote />} />
                <Route path="/notes/new" element={<AddNote />} />
                <Route path="/notes/:id" element={<DetailNote />} />
              </Route>
              <Route path="/login" element={<Login loginSuccess={onLoginSuccess} />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SearchContext.Provider>
        </ThemeContext.Provider>
      </LocaleContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
