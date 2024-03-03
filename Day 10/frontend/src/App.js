
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
//import ToDoList from './components/ToDoList';

import Header from './components/Header';  
import Home from './pages/Home';           
import ContactUs from './pages/ContactUs'; 
import AboutUs from './pages/AboutUs';  
import OrderForm from './components/OrderForm';

const App = () => {
  return (
    <Router>
      <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/order" element={<OrderForm />} />
      </Routes>
      </>
      
    </Router>
  )
}

export default App;*/

// src/App.js
import React from 'react';
import JokeComponent from './JokeComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JokeComponent />
      </header>
    </div>
  );
}

export default App;


  

  





