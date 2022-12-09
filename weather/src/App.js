// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// bak!!
//useFormik 

import './App.css';
import Container from './Components/Container';
import Header from "./Components/Header";

import { SelectContextProvider } from './Context/SelectContext';
import {WheatherContextProvider} from "./Context/WheatherContext";

function App() {
  
  return (
    <div className='App' >
        <h1 className='title' >Hava Durumu</h1>
        
   <SelectContextProvider>
    <WheatherContextProvider>
    
    <Header/>
    <Container/>
    </WheatherContextProvider>
   </SelectContextProvider>
   
    </div>
  )
}

export default App;
