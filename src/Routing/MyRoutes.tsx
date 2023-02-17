import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "../NavMenu/Login";
import Contact from "../NavMenu/Contact";
import Register from "../NavMenu/Register";
import Blogs from "../NavMenu/Blogs";
import NoPage from "../NavMenu/NoPage";
import Home from "../NavMenu/Home";
import NavMenu from "../NavMenu/NavMenu";

function MyRoutes() {
  const [usersData, setUsersData] = useState([]);
  const [myTodos, setMyTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setUsersData(response);
      });
  }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((response) => {
        console.log("todos => ", response);
        setMyTodos(response);
      });
  }, []);
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs user={usersData} />} />
        <Route path="/contact" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
