import React from 'react';

const View = (props) => {
    return (
        <div className="view">
            <h1>This is your input</h1>
            <div className="result">
                <div className="notebook">
                    <p>First name <span>{props.firstName}</span></p>
                     <p>Last name <span>{props.lastName}</span></p>
                    <p>Phone Number <span>{props.phoneNumber}</span> </p>
                    <p>Role <span>{props.role}</span></p>
                    <p>Message <span>{props.message}</span> </p>
                </div>
            </div>
        </div>
    );
};

export default View;





