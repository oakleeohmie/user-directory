import React from 'react';
import './App.css';
import Directory from "./pages/directory"
import Header from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Directory />
      <Footer />
    </div>
  );
}

export default App;
