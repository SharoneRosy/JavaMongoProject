import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const result = await axios.get(
        "http://localhost:8089/api/v1/student/getAll"
      );
      setStudents(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteStudent(studentid) {
    await axios.delete(
      "http://localhost:8089/api/v1/student/delete/" + studentid
    );
    alert("Student deleted Sucessfully ");
    Load();
  }

  return (
    <div>
      <Navbar />

      <table class="table table-striped mx-2 ">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Student Address</th>
            <th scope="col">Student Mobile</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {students.map(function fn(student) {
            return (
              <tr>
                <td>{student.studentname}</td>
                <td>{student.studentaddress}</td>
                <td>{student.mobile}</td>
                <td>
                  <Link to={`/edit/${student._id}`}>
                    <button type="button" className="btn btn-success m-1">
                      Edit
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteStudent(student._id)}
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
  );
}

export default Student;
