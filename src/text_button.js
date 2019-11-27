import React,{Component} from 'react'

// function App() {
//     return (
//       <div className="App">
//           <h3>Text Field</h3>
//         <input type='text'  placeholder='Enter your ID'/>
//         <button onClick={this.handleChange}>submit</button>

//       </div>
//     );
//   }

class App extends Component
  {


    handleChange = e =>{
        e.preventDefault();
        const { name,value } = e.target;
        console.log(e.target.value)
    }
    render()
    {
        return(
<div className="App">
          <h3>Text Field</h3>
        <input type='text'  placeholder='Enter your ID'/>
        <button onClick={this.handleChange}>submit</button>

      </div>
        );
    }
  }
  
  
  export default App;
  