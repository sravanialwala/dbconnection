// import React from 'react';
// import Radio from './radio_button'
// // import Text from './text_button'
// import './App.css';
// import Checkbox_imple from './checkbox'
// import DropDown from './dropdown'
// function App() {
//   return (
//     <div className="App">
//       <h1>DB Connection</h1>
//       {/* <Text/> */}
//       <Checkbox_imple/>
//       <Radio/>
//       <DropDown/>
//     </div>
//   );
// }

// export default App;

// this is App.js file
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import fiserv_logo from './Fiserv-logo-01.png';
class App extends Component {

  state = {
    message: '',
    life:''
  }

  makeHTTPCall = () => 
  {
    console.log("here yaaar")
    axios('http://localhost:3002/users')
      .then(response => {
        console.log("here yaaar")
        console.log(response);
        console.log(response.data)

        this.setState(
          ()=> { 
                  return { message: response.data,life : 'sravani'};
               });
      });

  }
  maeHTTPCall = () => 
  {
    console.log("here yaaar")
    axios('http://localhost:3001/users')
      .then(response => {
        console.log("here yaaar")
        console.log(response);
        console.log(response.data)

        this.setState(
          ()=> { 
                  return { message: response.data,life : 'sravani'};
               });
      });

  }
  render()
  {

    const j  = Object.values(this.state.message);
      var journalEntries = [];
  
        for (var i = 0; i < j.length; i++){
          journalEntries.push(
                <tr>
              <th>{j[i].id}</th>
              <th>{j[i].name}</th>
              <th>{j[i].email}</th>
              </tr>);
  
    console.log("journalEntries"+journalEntries)
  
  }
    return (
      <div className="App">
        <div className='csshead' >
        <img src={fiserv_logo}  height="200%" width="30%" className="image"/>
        </div>

        <h3> <pre>
        Click on this
        </pre> </h3>
        <button type="button" onClick={this.makeHTTPCall.bind(this)}> Display all the users </button>
        <table id='students'>
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
              {journalEntries}
              </tbody>
        </table>
      </div>
    );
  }
}

export default App;