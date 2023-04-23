import React from 'react';
import {FaPoop} from 'react-icons/fa'
import {Background} from '../styles/component-style';

const NotFound = () => {
    return (
        <Background>
            <div className='flex flex-center flex-gap'>
                <FaPoop style={{color: '#252525', fontSize: '32px'}}/>
                <h1>Not Found</h1>
            </div>
        </Background>
    );
};

export default NotFound;
