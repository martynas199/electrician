import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import CommentDetail from "./components/infobar/infobar";
import Header from "./components/hero/Header";
import ServicesCard from "./components/features/SimpleCard";





function App() {


  return (
    <div className="App">
      <CommentDetail />
      <Navbar />
<Header />
<ServicesCard /> 
    </div>
  );
}

export default App;
