import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";

function LeaderBoard() {
  const [users, setUser] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async val => {
    await Axios.get("http://localhost:3001/students").then(response => {
      setUser(response.data);
      //console.log(response.data);
    });
  };

  const deleteUser = async id => {
    await Axios.delete(`http://localhost:3001/delete/${id}`);
    loadUsers();
  };

  return (
    <div>
      <h1>LeaderBoard</h1>

      <input
        type="text"
        placeholder="Search by Name...."
        onChange={e => {
          setSearchItem(e.target.value);
        }}
        className="searchField"
      />

      <div className="table-container">
        <table className="table">
          <thead>
            <tr className="items">
              <th>Rank</th>
              <th>Roll NO</th>
              <th>Name</th>
              <th>Maths Marks</th>
              <th>Physics Marks</th>
              <th>Chemistry Marks</th>
              <th>Total</th>
              <th>Percentage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter(val => {
                if (searchItem === "") {
                  return val;
                } else if (
                  val.NAME.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((user, index) => (
                <tr key={index}>
                  <td data-label="Rank">{index + 1}</td>
                  <td data-label="Roll NO">{user.ROLLNO}</td>
                  <td data-label="Name">{user.NAME}</td>
                  <td data-label="Maths Marks">{user.MATHS}</td>
                  <td data-label="Physics Marks">{user.PHYSICS}</td>
                  <td data-label="Chemistry Marks">{user.CHEMISTRY}</td>
                  <td data-label="Total">{user.TOTAL}</td>
                  <td data-label="Percentage">{user.PERCENTAGE}</td>
                  <td data-label="#">
                    <button
                      className="btn"
                      onClick={() => deleteUser(user.ROLLNO)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard;
