import React from "react";
import './Reg.css';
// import Nav from './Nav';
import {useNavigate} from 'react-router-dom';



function Registration()
{
    const navigate = useNavigate();
    const handleSubmit = (evt) => {
        navigate("/")
    }

return(
    <div className="bg-light">
    <div className="container"  onSubmit={handleSubmit}>

    <br></br>
    
     <div className="row">
      <div className="col-md-6 col-sm-8 mx-auto">
        <div className="card">
          <div className="card-body">
                                                        
           <div className="text-center">
             <h3>CREATE ACCOUNT </h3>
           </div>
                  
           <div className="text-left">
                     
            <form>
             <div className="mb-2">
               <label for="name" className="fw-bold text-primary" >NAME *</label>
               <input type="text" name="fullname" className="form-control" placeholder="Enter Your Full Name" required />
             </div>
                            
             <div className="mb-2">
               <label for="email" className="fw-bold text-primary">EMAIL *</label>
               <input type="email" name="email" className="form-control" placeholder="Enter Your Email" required/>
             </div>
                            
             <div className="mb-2">
               <label for="mobileno" className="fw-bold text-primary">MOBILE NO *</label>
               <input type="tel" id ="mobileno" name="mobileno" className="form-control" placeholder="Enter Your Mobile No" required/>
             </div>
                            
             <div className="mb-2">
               <label for="country" className="fw-bold text-primary">COUNTRY</label> &nbsp;&nbsp;&nbsp;
               <select className="form-select" name="country">
                <option value="INDIA">INDIA</option>
                <option value="INDIA">USA</option>
                <option value="INDIA">UK</option>
               </select>
             </div>
                            
             <div className="mb-2">
                <label for="language" className="fw-bold text-primary form-check-label">LANGUAGE KNOWN</label> &nbsp;&nbsp;
                <input type="checkbox" className="form-check-input" checked name="english" value="English" />
                   <span className="text-info">English</span> &nbsp;&nbsp;
                <input type="checkbox" className="form-check-input" name="bengali" value="Bengali" />
                   <span className="text-info">Bengali</span> &nbsp;&nbsp;
                <input type="checkbox" className="form-check-input" name="hindi" value="Hindi" />
                   <span className="text-info">Hindi</span>
             </div>
                            
             <div className="mb-2">
                <label for="gender" className="fw-bold text-primary form-check-label">GENDER</label> &nbsp;&nbsp;&nbsp;
                <input type="radio" className="form-check-input" name="gender" value="Male" />
                    <span className="text-info">MALE</span> &nbsp;&nbsp;
                <input type="radio" className="form-check-input" name="gender" value="Female" />
                    <span className="text-info">FEMALE</span>
             </div>
                            
             <div className="mb-2">
                <label for="dob" className="fw-bold text-primary">DATE OF BIRTH</label>
                <input type="date" name="dob" className="form-control" max="2012-12-31"/>
             </div>
                            
             <div className="mb-2">
                <label for="password" className="fw-bold text-primary">PASSWORD</label>
                <input type="password" name="password" className="form-control" placeholder="Enter password" required/>
             </div>
    
             <div className="mb-2">
                <label for="address" className="fw-bold text-primary">ADDRESS</label> 
                <textarea name="address" placeholder="Write your Address Here" rows="4" cols="80" ></textarea>
             </div>
             
             <div className="d-grid">		 
               <input type="submit" className="btn btn-secondary" value="CREATE ACOUNT"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             </div>
            </form>
           </div>
          </div>
        </div>
       </div> 
      </div> 
    </div> 
    </div>
 
)
}
export default Registration;