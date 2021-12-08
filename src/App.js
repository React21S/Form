
import Form from './components/Form';
import Header from './components/Header';
import Footer from './components/Footer';
import View from './components/View';
import Popup from './components/Popup';
import Notes from './components/Notes';

import axios from "axios";

import {db} from "./components/firebase.config-2";
import {collection, addDoc} from "firebase/firestore";




import React, { Component } from 'react';

class App extends Component {
  state = {
    inputData:{
      firstName: "",
      lastName: "",
      phoneNumber: "",
      role: "",
      message: "",
    },
    
    showPopup: false, 
    data:[]
  }

  // For database
  usersCollectionRef = collection(db, "users");
  createUser = async () => {
    await addDoc(this.usersCollectionRef, {
      inputData:{ ...this.state.inputData}
    });
    this.postHandler();
  };


  componentDidMount(){
    axios.get("http://localhost:3001/notes")
    .then((res)=>{this.setState({data:res.data});
    
    
  })
  }

  formHandler=(event)=>{
    this.setState({
      inputData:{ ...this.state.inputData, [event.target.name]:event.target.value},
     });
  }
  popUpHandler = (ev)=>{
    ev.preventDefault();
    this.setState({showPopup:true})
  }
  
  // For posting to local db
  postHandler=()=>{
    axios.post("http://localhost:3001/notes", this.state.inputData)
    .then((res)=>{
      console.log(res);
      this.setState({showPopup:false});
    })
    .catch((error)=>console.log(error));

  };

  render() {
    
    return (
      <div>
        <Header/>
        <main>
          <div className="formArea">
          <Form change={this.formHandler} submit={this.popUpHandler}/>
        <View {...this.state.inputData}/>

          </div>
        <div className="Notes">
        {this.state.showPopup && <Popup{...this.state.inputData} postForm={this.createUser}/>}

        {this.state.data.map((note)=>
        <div className="notes">
          <div className="note" key={note.id}><Notes {...note} />
          </div>
        </div>
        )}
          
        </div>
        </main>
       
       <Footer/>
      </div>
    );
  }
}

export default App;


