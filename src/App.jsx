import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Users from "./assets/Users";
import CreateUser from "./assets/CreateUser";
import UpdateUser from "./assets/UpdateUser";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
};

export default App;
