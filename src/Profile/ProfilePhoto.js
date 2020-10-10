import React from 'react';
import Photo from '../ProfilePhoto.jpg'; 

function ProfilePhoto() {
    return (
        <div>
            <img src={Photo} style={{
                height: 500,
                borderRadius: 30,
                border: '3px solid #f79845',
            }} />
        </div>
    )
}

export default ProfilePhoto
