import axios from 'axios';
import React,{useState} from 'react';
import {useNavigate} from "react-router-dom"


function Add() {
    const navigate=useNavigate();
    const [studentname,setName]=useState("");
    const [studentaddress,setAddress]=useState("");
    const  [mobile,setMobile]=useState("");

    async function save(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8089/api/v1/student/create",
            {
                studentname:studentname,
                studentaddress:studentaddress,
                mobile:mobile
            });
            alert("Student Registration id Done Sucessfully ");
            
            setAddress("");
            setAddress("");
            setMobile("");
            navigate("/");
        }catch(err){
            alert("User Registration is failed");
        }
    }
  return (
    <div className='d-flex justify-content-center m-5  ' > 
           
            <form  onSubmit={save} className='w-25 border border-primary p-3 rounded'>
                <div className='form-group'>
                <label>Student Name</label>
                <input type='text'
                 className='form-control'
                 id="studentname" 
                 value={studentname}
                 placeholder='Name'
                  onChange={(event)=>
                  {setName(event.target.value)}
                  }  />
                  </div>

                <div className='form-group'>
                <label>Student Address</label>
                <input type='text'
                 className='form-control'
                 id="studentaddress" 
                 value={studentaddress}
                 placeholder='Address'
                  onChange={(event)=>
                  {setAddress(event.target.value)}
                  }  />
                  </div>

                  <div className='form-group'>
                <label>Mobile</label>
                <input type='text'
                 className='form-control'
                 placeholder='Mobile'
                 id="mobile" 
                 value={mobile}
                  onChange={(event)=>
                  {setMobile(event.target.value)}
                  }  />
                  </div>
                  <button type="submit" class="btn btn-primary m-2" >Register</button>
            </form>
    </div>
  )
}

export default Add

