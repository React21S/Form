import React from 'react';



const Form = (props) => {
   
    return (
        <div>
                <form >
                        <div>
                        <label htmlFor="firstName"> First Name</label>
                        <input type="text" name="firstName" id="firstName" required onChange = {props.change} />
                </div>

                <div>
                        <label htmlFor="lastName"> Last Name</label>
                        <input type="text" name="lastName" id="lastName" required onChange = {props.change} />
                </div>
                    
                <div>
                        <label htmlFor="phoneNumber"> Phone Number</label>
                        <input type="number" name="phoneNumber" id="phoneNumber" required onChange = {props.change}/>
                </div>
                <div>
                    <label htmlFor="role">Role</label>
                    <select name="role" id="role" onChange = {props.change}>
                        <option value="" >---select your Role---</option>
                        <option value="CEO" >CEO</option>
                        <option value="Developer" >Developer</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message"
                        name="message"
                        required onChange = {props.change}
                    ></textarea>
                </div>
                <div className="submit">
                    <button className="submit" >Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;









