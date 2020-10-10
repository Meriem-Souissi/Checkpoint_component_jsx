import React from 'react';
import ProfilePhoto from './Profile/ProfilePhoto';
import FullName from './Profile/FullName';
import Adress from './Profile/Adress';
import './App.css';

function Main() {
    return (
        <div className = 'body'>
            <ProfilePhoto/>
            <FullName/>
            <Adress/>
        </div>
    )
}

export default Main
