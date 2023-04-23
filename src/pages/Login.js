import React from 'react';
import {Link} from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';
import {login} from '../utils/api';
import {Background, Wrapper} from '../styles/component-style';
import PropTypes from 'prop-types';

const Login = ({loginSuccess}) => {
    const {locale} = React.useContext(LocaleContext);
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');

    const loginHandler = async (user) => {
        return await login(user);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        loginHandler({email, password})
            .then(({ error, data }) => {
                if (!error) {
                    loginSuccess(data);
                }
            });
    }

    return (
        <Background>
            <Wrapper>
                <h1>{locale === 'id' ? 'Masuk' : 'Login'}</h1>
                <form onSubmit={onSubmitHandler}>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={handleEmailChange}/>
                    <input
                        type='password'
                        placeholder='******'
                        value={password}
                        onChange={handlePasswordChange}/>
                    <button>Login</button>
                </form>
                <span>
                    {locale === 'id' ? 'Belum punya akun?' : "Don't have an account?"}
                    <Link to='/register'>{locale === 'id' ? ' Klik disini' : ' Click here'}</Link>
                </span>
                <span><Link to='/'>{locale === 'id' ? 'Kembali ke beranda' : 'Back to home'}</Link></span>
            </Wrapper>
        </Background>
    );
};

Login.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default Login;
