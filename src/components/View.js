import React from 'react';

const View = ({firstName, lastName,phoneNumber, role, message}) => {
    return (
        <div className="view">
            <h1>This is your input</h1>
            <div className="result">
                <div className="notebook">
                    <p>First name <span>{firstName}</span></p>
                     <p>Last name <span>{lastName}</span></p>
                    <p>Phone Number <span>{phoneNumber}</span> </p>
                    <p>Role <span>{role}</span></p>
                    <p>Message <span>{message}</span> </p>
                </div>
            </div>
        </div>
    );
};

export default View;





