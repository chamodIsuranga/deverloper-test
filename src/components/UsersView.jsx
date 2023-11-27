import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="container">
        <div className='title'>
          Users
        </div>
        <div className='cards'>
        {users.map(user => 
          <Link to={"/" + user.id} className='card' key={user.id}>
            <img className='user_image' src={user.avatar} width={"100%"} />
            <p className='first_name'>{user.first_name}</p>
            <p>{user.email}</p>
          </Link>
        )} 
        </div>
      </div>
  );
};

export default UsersView;
