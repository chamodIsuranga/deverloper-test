import React, { useState, useEffect } from 'react';

const UsersView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => {
        setUsers(data.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className='title'>
          Users
        </div>
        <div className='cards'>
        {users.map(user => 
          <div className='card' key={user.id}>
            <img className='user_image' src={user.avatar} width={"100%"} />
            <p className='first_name'>{user.first_name}</p>
            <p>{user.email}</p>
          </div>
        )} 
        </div>
      </div>
    </div>
  );
};

export default UsersView;
