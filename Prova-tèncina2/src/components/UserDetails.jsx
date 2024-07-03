import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

export function UserDetails({ user, isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Details"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      }}
    >
      <button onClick={onRequestClose}>Close</button>
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Address: {user.address.street}, {user.address.city}</p>
        <p>Company: {user.company.name}</p>
      </div>
    </Modal>
  );
}

export default UserDetails;
