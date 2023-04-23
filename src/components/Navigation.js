import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {putAccessToken} from '../utils/api';
import LocaleContext from '../contexts/LocaleContext';
import AuthContext from '../contexts/AuthContext';
import Searchbar from './Searchbar';
import {BsMoon, BsTranslate, BsFolder2Open, BsBook, BsSun} from 'react-icons/bs'
import ThemeContext from '../contexts/ThemeContext';

const Navigation = () => {
    const {locale, toggleLocale} = React.useContext(LocaleContext);
    const {auth, authChange} = React.useContext(AuthContext);
    const {theme, toggleTheme} = React.useContext(ThemeContext);
    const {pathname} = useLocation();

    const onLogoutHandler = () => {
        authChange(null);
        putAccessToken('');
    }

    return (
        <nav className='flex flex-center flex-between'>
            <div className='flex flex-center'>
                <Link to='/'>
                    <h1>Catat</h1>
                </Link>
                {auth !== null && pathname !== '/archives' ? <Searchbar /> : ''}
            </div>
            <div className='flex flex-center flex-gap'>
                {auth && (
                    <>
                        <li>
                            <Link to='/notes/new' className='write'>
                                <BsBook />
                                <span>{locale === 'id' ? 'Tulis' : 'Write'}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/archives'>
                                <BsFolder2Open />
                            </Link>
                        </li>
                    </>
                )}
                <li onClick={toggleTheme}>
                    {theme === 'light' ? <BsMoon /> : <BsSun />}
                </li>
                <li onClick={toggleLocale} style={locale === 'id' ? {color: '#000'} : {}}>
                    <BsTranslate />
                </li>
                {!auth ? (
                    <Link className='button' to='/login'>{locale === 'id' ? 'Masuk' : 'Login'}</Link>
                ) : (<button onClick={onLogoutHandler}>{locale === 'id' ? 'Keluar' : 'Logout'}</button>)}
            </div>
        </nav>
    );
};

export default Navigation;
