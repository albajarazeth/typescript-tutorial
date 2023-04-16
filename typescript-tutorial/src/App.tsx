import React from 'react';
import './App.css';

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

type Person = {
  name: string;
  age?: number;
}

let personOne: Person = {
  name: "Liam",
};

let lotsOfPeople: Person[];

function App() {
  return (
    <div className="App">
      <h1>main</h1>
    </div>
  );
}

export default App;
