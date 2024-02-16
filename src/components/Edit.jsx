import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [studentid, setId] = useState("");
  const [studentname, setName] = useState("");
  const [studentaddress, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  async function getdatabyid(event) {
    const result = await axios.get(
      "http://localhost:8089/api/v1/student/search/" + id
    );
    console.log(result);
    setId(result.data._id);
    setName(result.data.studentname);
    setAddress(result.data.studentaddress);
    setMobile(result.data.mobile);
  }

  useEffect(() => {
    getdatabyid();
  }, []);

  async function update(event) {
    event.preventDefault();
    await axios.put("http://localhost:8089/api/v1/student/edit/" + studentid, {
      studentname: studentname,
      studentaddress: studentaddress,
      mobile: mobile,
    });
    alert("Details Updated sucessfully");
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={update}>
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            className="form-control"
            id="studentname"
            value={studentname}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Student Address</label>
          <input
            type="text"
            className="form-control"
            id="studentaddress"
            value={studentaddress}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            value={mobile}
            onChange={(event) => {
              setMobile(event.target.value);
            }}
          />
        </div>

        <button className="btn btn-primary mt-4" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default Edit;
