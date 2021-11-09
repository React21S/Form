
import Form from './components/Form';
import Header from './components/Header';
import Footer from './components/Footer';
import View from './components/View';
import Popup from './components/Popup';





import React, { Component } from 'react';

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    role: "",
    message: "",
    showPopup: false, 
  }

  formHandler=(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }
  popUpHandler = (ev)=>{
    ev.preventDefault();
    this.setState({showPopup:true})
  }
  render() {
    const props={
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      phoneNumber:this.state.phoneNumber,
      role:this.state.role,
      message:this.state.message, 
    };
    return (
      <div>
        <Header/>
        <Form change={this.formHandler} submit={this.popUpHandler}/>
        <View {...props}/>
      {this.state.showPopup && <Popup{...props}/>}
       <Footer/>
      </div>
    );
  }
}

export default App;


