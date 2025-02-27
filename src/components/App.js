import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
// import Links from "./links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
// console.log(user.links)
function App() {
  return (
    <div>
      <NavBar />
      <Home name = {user.name} city = {user.city} color = {user.color}/>
      <About bio = {user.bio} links = {user.links}/>
    </div>
  );
}

export default App;
