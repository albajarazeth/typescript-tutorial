import React from 'react';
import './App.css';

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

interface Person{
  name: string;
  age?: number;
}

interface Position extends Person{
  profession: string;
}

let personOne: Person = {
  name: "Liam",
};

let lotsOfPeople: Person[];

//let printOtherName: Function;
let printOtherName: (name: string) => never;

function printName(name: string){
  console.log(name);
}

type X = {
 a: string,
 b: number
} 

type Y = X & {
  c: string,
  d: number
};

/*
let y: Y = {
  c: "William",
  d: 45
}
*/

function App() {
  return (
    <div className="App">
      <h1>main</h1>
      <button onClick={()=>printName("Marie")}>CLICK ME</button>
    </div>
  );
}

export default App;
