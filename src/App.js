import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import View from './components/View';



import React, { Component } from 'react';

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    role: "",
    message: "",
  }

  formHandler=(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }
  render() {
    return (
      <div>
        <Header/>
        <Form change={this.formHandler}/>
       
        <View 
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              phoneNumber={this.state.phoneNumber}
              role={this.state.role}
              message={this.state.message} 
        />
    
       
      </div>
    );
  }
}

export default App;


