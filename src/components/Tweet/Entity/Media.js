import React from 'react';
import './Media.scss';


const Media = ({ media }) => {
    const type = media.type;
    var imageStyle = {
        backgroundImage: `url("${media.media_url_https}")`
    }
    
    if (media.type ==='photo') {
        return <div className="image-section" style={imageStyle}>
            <img src={media.media_url_https} alt="Flowers"></img>            
        </div>
    } else {
        // since theres types i assume theres another type of media
        return null;
    }
}

export default Media ;
