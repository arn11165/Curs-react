import React from 'react';
import '../styles/UserList.css';

export function UserList ({users, setSelectedUser, openModal}) {
    return (
        <div className='contDiv'>
          {users.map(user => (
            <div className='userDiv' key={user.id} onClick={() => setSelectedUser(user)}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <button onClick={(e) => { e.stopPropagation(); openModal(user); }}>Ver más</button>
            </div>
          ))}
        </div>
    )
}

export default UserList;