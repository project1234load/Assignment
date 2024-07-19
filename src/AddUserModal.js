import React, { useState } from 'react';

function AddUserModal(props) {
    const { addUser, closeAddModal } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        const newUser = {
            firstName: name,
            email
        };
        addUser(newUser);
    };
    const styles = {
        modal: {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: '1px solid black',
            padding: '0px 20px 20px 20px',
            backgroundColor: 'white'


        }
    };
    return (
        <div style={styles.modal}>
            <h2>Add User</h2>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label><br />
            <label>
                Email:
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </label><br />
            <button onClick={handleSubmit}>Add</button>
            <button onClick={closeAddModal}>Cancel</button>
        </div>
    );
}
export default AddUserModal