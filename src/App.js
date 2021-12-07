
import Form from './components/Form';
import Header from './components/Header';
import Footer from './components/Footer';
import View from './components/View';
import Popup from './components/Popup';
import Notes from './components/Notes';
import axios from "axios";





import React, { Component } from 'react';

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    role: "",
    message: "",
    showPopup: false, 
    data:[]
  }

  componentDidMount(){
    axios.get("http://localhost:3001/notes")
    .then((res)=>{this.setState({data:res.data});
  });
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
        <main>
          <div className="formArea">
          <Form change={this.formHandler} submit={this.popUpHandler}/>
        <View {...props}/>

          </div>
        <div className="Notes">
        {this.state.showPopup && <Popup{...props}/>}

        {this.state.data.map((note)=>
        <div className="note"><Notes {...note}/></div>)}
          
        </div>
        </main>
       
       <Footer/>
      </div>
    );
  }
}

export default App;


