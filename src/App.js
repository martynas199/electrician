import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import CommentDetail from "./components/infobar/infobar";
import Header from "./components/hero/Header";


function App() {


  return (
    <div className="App">
      <CommentDetail />
      <Navbar />
<Header />
    </div>
  );
}

export default App;
