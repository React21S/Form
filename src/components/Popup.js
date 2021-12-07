import React from 'react';



const closePopupHandler=()=>{
    window.location.reload();
}
const Popup = ({firstName, lastName,phoneNumber, role, message, postForm}) => {
    return (
        <div className="popup">
            <div className="overlay">
                <h1>Check your information</h1>
                <div>
                    <p>First name <span>{firstName}</span></p>
                    <p>Last name <span>{lastName}</span></p>
                    <p>Phone Number <span>{phoneNumber}</span> </p>
                    <p>Role <span>{role}</span></p>
                    <p>Message <span>{message}</span> </p>

                    <button onClick={postForm}>Yes, I am Sure</button>
                    <button className="check" onClick={closePopupHandler}>Nope Don't want to post it</button>
                </div>
            </div>

        </div>
    );
};

export default Popup;