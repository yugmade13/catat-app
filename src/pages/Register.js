import React from 'react';
import LocaleContext from '../contexts/LocaleContext';
import {Background, Wrapper} from '../styles/component-style';
import {Link, useNavigate} from 'react-router-dom';
import {register} from '../utils/api';
import useInput from '../hooks/useInput';

const Register = () => {
    const {locale} = React.useContext(LocaleContext);
    const navigate = useNavigate();

    const [name, handleNameChange] = useInput('');
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');
    const [confirmPassword, handleConfirmPasswordChange] = useInput('');

    const registerHandler = async (user) => {
        const { error } = await register(user);
        return error;
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            return alert('Password dan Confirm Password tidak cocok!');
        }

        registerHandler({name, email, password, confirmPassword})
            .then((error) => {
                if (!error) {
                    navigate('/login');
                }
            });
    }

    return (
        <Background>
            <Wrapper>
                <h1>{locale === 'id' ? 'Daftar' : 'Register'}</h1>
                <form onSubmit={onSubmitHandler}>
                    <input
                        type='text'
                        placeholder={locale === 'id' ? 'Nama' : 'Name'}
                        value={name}
                        onChange={handleNameChange}/>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={handleEmailChange}/>
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}/>
                    <input
                        type='password'
                        placeholder={locale === 'id' ? 'Ulangi password' : 'Confirm password'}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}/>
                    <button type='submit'>Register</button>
                </form>
                <span>
                    {locale === 'id' ? 'Sudah punya akun?' : 'Have an account?'}
                    <Link to='/login'>{locale === 'id' ? ' Masuk disini' : ' Login here'}</Link>
                </span>
            </Wrapper>
        </Background>
    );
};

export default Register;
