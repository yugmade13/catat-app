import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import { getUserLogged } from '../utils/api';

function Layout() {
  const [initializing, setInitializing] = useState(true);
  const { auth, authChange } = useContext(AuthContext);

  useEffect(() => {
    getUserLogged()
      .then(({ data }) => {
        authChange(data);
        setInitializing(false);
      });
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <div className="notes-app">
      <header>
        <Navigation />
      </header>
      {auth ? (
        <main>
          <Outlet />
        </main>
      ) : (<Hero />)}
    </div>
  );
}

export default Layout;
