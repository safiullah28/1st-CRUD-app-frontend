import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Users = () => {
  // const { id } = useParams();
  const [user, setUser] = useState([
    {
      name: "Safi",
      email: "safi@gmail.com",
      age: 20,
    },
  ]);

  useEffect(() => {
    axios
      .get("https://1st-crud-app-backend-production.up.railway.app/getUsers")
      .then((result) => {
        setUser(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:9000/deleteUser/" + id)
      .then((result) => {
        console.log(result);
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    <Link
                      to={`/update/${item._id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
