import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light primary ">
      
        <div className="m-2">
        <h3>Students Registration</h3>
        </div>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="form-inline my-2 my-lg-0">
            <form class="d-felx">
            <Link to="/add">
              <button type="button" className="btn btn-primary ">
                Add
              </button>
            </Link>
            </form>
            

          </div>
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar;
