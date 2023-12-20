
import './App.css';
import React ,{useState} from "react";
import Navbar from './components/Navbar/Navbar';


function App() {
  const [searchData,useSeatchData]=useState();
  return (
    <>
    <Navbar searchData={searchData}/>
    </>
  );
}

export default App;
