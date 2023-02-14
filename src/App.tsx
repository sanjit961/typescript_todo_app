import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Demo from "./component/Demo";
import ApiDataShow from "./component/ApiDataShow";
import Todos from "./component/Todos";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
function App() {
  const [firstName, setFirstName] = useState<string>("sfdsf");
  const [lastName, setLastName] = useState("Lungeli");
  const [usersData, setUsersData] = useState([]);
  const [myMobileNumber, setMyMobileNumber] = useState<number>(88990088);
  const [myCars, setMyCars] = useState<Object>({});
  const [myArr, setMyArr] = useState<Array<number>>([2343, 3434]);
  const [myTodos, setMyTodos] = useState([]);
  const changeName = () => {
    setFirstName("Akshay");
    setLastName("Kumar");
    setMyMobileNumber(993454444);
    setMyCars({ cars: [{ ferrari: "12", lambor: "2343" }] });
  };
  useEffect(() => {
    console.log("myInfo", myMobileNumber);
    console.log("my cars", myCars);
  }, [myMobileNumber, myCars]);
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
  useEffect(() => {
    console.log("myTodos => ", myTodos);
  }, [myTodos]);
  return (
    <Row className="mx-2">
      <ApiDataShow user={usersData} heading="API" />
    </Row>
  );
}

export default App;
