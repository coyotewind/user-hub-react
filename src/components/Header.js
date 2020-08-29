import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { storeCurrentUser, clearCurrentUser } from '../auth';
import './Header.css';

function Header({ currentUser, setCurrentUser, userList }) {
    
    const [selectedUser, setSelectedUser] = useState();

    useEffect(() => {
        setSelectedUser(userList[0]);
      }, [userList]);

    const handleSubmit = (event) => { 
        event.preventDefault(); 
    };

    const handleSelectChange = (event) => {
        const id = event.target.value;
        const user = userList.find(user => { 
            return user.id === id
        });
        setSelectedUser(user);
    };

    const handleUserLogin = (event) => {
        storeCurrentUser(selectedUser);
        setCurrentUser(selectedUser);
    };

    const handleUserLogout = (event) => {
        setSelectedUser(userList[0]);
        clearCurrentUser(); // NEW
        setCurrentUser(null);
    };

    return (
        <header>
            <h1>Welcome to UserHub</h1>
            <form className='user-select' onSubmit={handleSubmit}>
                {
                    currentUser
                    ? <div>
                        <NavLink to="/posts" activeClassName="current">Posts</NavLink>
                        <NavLink to="todos" activeClassName="current">Todos</NavLink>
                        <button onClick={ handleUserLogout }>Log Out, { currentUser.username }</button>
                    </div>
                    : <div>
                        <select onChange={ handleSelectChange }>
                            {userList.map((user) => (
                                <option key={ user.id } value={ user.id }>{ user.username }</option>
                            ))}
                        </select>
                        <button onClick={handleUserLogin}>LOG IN</button>
                    </div>
                }
            </form>
        </header>
    );

};

export default Header;
