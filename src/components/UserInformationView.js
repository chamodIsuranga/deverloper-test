import React, { useState, useEffect } from 'react';

const UserInfoView = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${props.user_id}`)
      .then(response => response.json())
      .then(data => {
        setUser(data.data); // Set the user data in state
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [props.user_id]);

  return (
    <div className="container">
      {user && (
        <div className='user_info_section'>
          <div className='user_image_section'>
            <img src={user.avatar} />
          </div>
          <div className='user_info'>
            <div className='user_data_names'>
              <span>First Name</span>
              <span>Last Name</span>
              <span>Email</span>
            </div>
            <div className='user_data_values'>
              <span>{user.first_name}</span>
              <span>{user.last_name}</span>
              <span>{user.email}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfoView;
