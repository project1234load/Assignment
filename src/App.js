import React, { useState, useEffect } from 'react';
import './App.css';
import AddUserModal from './AddUserModal';
import EditUserModal from './EditUserModal';

function App() {
  const [users, setUsers] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.users))

  }, []);

  const closeAddModal = () => setIsAddModalOpen(false);
  const closeEditModal = () => setIsEditModalOpen(false);


  const openAddModal = () => {
    setIsAddModalOpen(true);
  }


  const openEditModal = (user) => {
    closeAddModal();
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };


  const addUser = (user) => {
    setUsers([...users, user]);
    closeAddModal();
  };

  const editUser = (updatedUser) => {
    setUsers(users.map((user) => {
      if (user.id === updatedUser.id) { return updatedUser }
      else { return user }
    }));
    closeEditModal();
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="App">
      <h1>Users Table</h1>
      <button onClick={openAddModal}>Add User</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => openEditModal(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isAddModalOpen && <AddUserModal addUser={addUser} closeAddModal={closeAddModal} closeEditModal={closeEditModal} />}
      {isEditModalOpen && <EditUserModal user={selectedUser} closeModal={closeAddModal} editUser={editUser} closeModal={closeEditModal} />}
    </div>
  );
}





export default App;
