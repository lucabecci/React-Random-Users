import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from 'react-redux';
import store from "./store/store";
import { addUsers } from "./actions/users";
//components
import Header from "./components/Header";
import UsersList from "./components/UsersList";
//css
import './css/styles.css';


const App = () => {
  const [data, setDara] = useState({});
  
  const getData = () => {
    axios.get("/users").then((response) => {
      console.log(response.data);
      store.dispatch(addUsers(response.data.results));
    });
  };

  getData();

  return (
    <div>
      <Header/>
      <UsersList/>
    <div/>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById("root"));
