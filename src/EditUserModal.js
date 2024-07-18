
import React, { useState } from 'react';
function EditUserModal({ user, editUser, closeModal }) {
    const [name, setName] = useState(`${user.firstName} ${user.lastName}`);
    const [email, setEmail] = useState(user.email);

    const handleSubmit = () => {
        const editedUser = {
            ...user,
            userName: name,
            email
        };
        editUser(editedUser);
    };

    const styles = {
        modal: {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",

        }
    };

    return (
        <div style={styles.modal}>
            <h2>Edit User</h2>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label><br />
            <label>
                Email:
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </label><br />
            <button onClick={handleSubmit}>Edit</button>
            <button onClick={closeModal}>Cancel</button>
        </div>
    );
}
export default EditUserModal