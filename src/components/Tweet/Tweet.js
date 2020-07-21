import React from 'react';
import './Tweet.scss';
import Moment from 'moment';
import Media from './Entity/Media';
import ProfileImage from './ProfileImage';
import Polls from './Entity/Polls';

const Tweet = ({ article }) => {
  return <article>
    <div className="article-wrapper">
        <a className="profile-picture">
          <div >
            <ProfileImage user={article.user}/>
          </div>
        </a>
        <div className="content"> 
          <div className="header">
            <h3 className="user-name">{article.user.name} </h3>
            <h3 className="screen-name">@{article.user.screen_name}</h3>
            <time data-tooltip={article.created_at}>{Moment(article.created_at).format('d MMM')}</time>
          </div>
          <div>
            <h3 className="text-title">{article.title}</h3>
            <p className="text-content">{article.content}</p>
            { article.entity.media ?  
              <div className="photo-gallery">
                {
                article.entity.media.map((media, index) =>
                (
                    <div key={`${index}`} className="box">
                        <Media media={article.entity.media[index]} />
                    </div>
                )) 
                }
              </div> 
              : 
              null
            }
            {
              article.entity.polls ?
                <div> <h1>poll content</h1>
                  { article.entity.polls.map((polls, index) =>
                    (   
                        <div key={`${index}`}>
                            <Polls polls={article.entity.polls[index]} />
                        </div>
                    ))
                  }
                </div>                 
              :
              null
            }    
          </div>
      </div>
    </div>
  </article>
};

export default Tweet ;
