import React from 'react';

const View = (props) => {
    return (
        <div className="view">
            <h2>This is your input</h2>
            <div className="result">
                    <div className="line">
                        <p>First name {props.firstName}</p>
                        <p>Last name {props.lastName}</p>
                        <p>Phone Number{props.phoneNumber} </p>
                        <p>Role {props.role}</p>
                        <p>Message {props.message}</p>
                    </div>
                
            </div>
        </div>
    );
};

export default View;





