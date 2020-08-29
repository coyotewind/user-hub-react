import React from 'react';

import './UserPosts.css';

function UserPosts ({ currentUser, userPosts }) {
  return (
      <div className='user-posts'>
          <h2>Posts By {currentUser.username}</h2>
          {
            userPosts.map( function ({ id, title, body }) { 
                return <div key={id} className='post'>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
            })
          }
      </div>
  );
}

export default UserPosts;