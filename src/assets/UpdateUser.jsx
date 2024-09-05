import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, { name, email, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id, { name, email, age })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name "
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-success" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
