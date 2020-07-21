import React from 'react';
import './ProfileImage.scss';

const ProfileImage = ({ user }) => {
    return <img className="image" src={user.profile_image_url_https} alt="users"/>            
}

export default ProfileImage ;
