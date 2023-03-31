import React from "react";
//import photo from "./N.jpg";
// import Nav from "./Nav";
import {useNavigate} from 'react-router-dom';
function Login()
{    
  const navigate = useNavigate();
  const handleSubmit = (evt) => {
      navigate("/")
  }

    return(
   
      <div style={{ marginTop:"250px"}}>
      <div className="row" onSubmit={handleSubmit}>
      <div className="col-md-4 col-sm-8 mx-auto">
        <div className="card bg-light">
          <div className="card-body">
           <h2 style={{textAlign:"center", fontSize:"21px"}} className="fw-bold text-primary">Login Page</h2>
            <div className="text-left">
              <form name='login'>

                <div className="mb-3">
                  <label for="email" className="fw-bold text-primary">EMAIL ID *</label>
                  <input type="email" name="email" className="form-control" placeholder="Enter Email Id" required/>
                </div>

                <div className="mb-3">
                  <label for="password" className="fw-bold text-primary">PASSWORD *</label>
                  <input type="password" name="password" className="form-control" placeholder="Enter Password" required/>
                </div>

                <div className="d-grid">
                  <input type="submit" className="btn btn-secondary" value="LOGIN"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> 
    </div> 
  </div> 
        
    
     
    );
}
export default Login;