import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NoteList from "./NoteList";
import Demo from "./demo";
import Car from "./w3learning";

var destination = document.querySelector("#container");
var w3destination = document.querySelector("#w3container");
var demoDestination = document.querySelector("#demo");

ReactDOM.render(
    <div>
       <NoteList/>
    </div>,
    destination
);

ReactDOM.render(
    <div>
       <Demo/>
    </div>,
    demoDestination
);

ReactDOM.render(
    <div>
       <Car/>
    </div>,
    w3destination
);

//Ensure ids are capitalized ex: <Demo>, <Car>