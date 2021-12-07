import React from 'react';

const Notes = ({firstName, lastName,phoneNumber, role, message}) => {
    return (
        <div className="notes">
            <p>Firstname: <span>{firstName}</span></p>
            <p>Lastname: <span>{lastName}</span></p>
            <p>Phonenumber:  <span><em>{phoneNumber}</em></span> </p>
            <p>Role: <span>{role}</span></p>
            <p>Message: <span><strong>{message}</strong></span> </p>
        </div>
    );
};

export default Notes;