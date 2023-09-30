import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React from "react";
function App() {
  var[data,setData]=React.useState("")
  function generate(){
    axios.get("https://api.quotable.io/random").then((res)=>{
      console.log(res.data)
      setData({...res.data})
    })
  }
  return (
    <div className="wrapper">
      <div className="container">
          <h5>{data.content}</h5>
          <h6 id="author">{data.author}</h6>
        <button onClick={generate}>Generate quote</button>
      </div>
    </div>
  );
}

export default App;
