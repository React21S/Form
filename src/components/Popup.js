import React from 'react';



const closePopupHandler=()=>{
    window.location.reload();
}
const Popup = (props) => {
    return (
        <div className="popup">
            <div className="overlay">
                <h1>Your Note</h1>
                <div>
                    <p>First name <span>{props.firstName}</span></p>
                    <p>Last name <span>{props.lastName}</span></p>
                    <p>Phone Number <span>{props.phoneNumber}</span> </p>
                    <p>Role <span>{props.role}</span></p>
                    <p>Message <span>{props.message}</span> </p>

                    <button onClick={closePopupHandler}>Yes, I am Sure</button>
                    <button className="check" onClick={closePopupHandler}>Nope Don't want to post it</button>
                </div>
            </div>

        </div>
    );
};

export default Popup;