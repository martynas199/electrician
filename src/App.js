import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CommentDetail from "./components/infobar/infobar";
import Header from "./components/hero/Header";
import ServicesCard from "./components/features/SimpleCard";
import Heading from "./components/heading/Heading";
import FooterContainer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <CommentDetail />
      <Navbar />
      <Header />
      <Heading />
      <ServicesCard />
      <FooterContainer />
    </div>
  );
}

export default App;
