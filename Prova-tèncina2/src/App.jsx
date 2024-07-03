import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import { UserDetails } from './components/UserDetails';
import './styles/App.css';
import './styles/UserList.css';
import './styles/searchBar.css';

const URL_USERS = 'https://jsonplaceholder.typicode.com/users';

export function App () {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        fetch(URL_USERS)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error)) 
    }, [])
    
    const filteredUsers = users.filter(user =>
        user.name.toUpperCase().includes(search.toUpperCase())
    );

    const openModal = user => {
        setSelectedUser(user);
        setIsModalOpen(true);
      };
    
    const closeModal = () => {
      setSelectedUser(null);
      setIsModalOpen(false);
    };

    console.log(isModalOpen)

    return (
        <>
            <h1>Prueba técnica REACT <i class="fa-brands fa-react"></i> </h1>
            <SearchBar setSearch={setSearch} />
            <UserList users={filteredUsers} setSelectedUser={setSelectedUser} openModal={openModal} />
            {selectedUser && (
                <UserDetails
                    user={selectedUser}
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                />
            )}
        
        </>
    );
} 

export default App;