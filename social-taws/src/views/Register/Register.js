import React,{useState} from 'react';
import {Link ,useHistory} from 'react-router-dom';
import {userService} from '../../services/'
import './Register.css';

const Register = () =>{

  return ( 
    <>
      <div className="col-lg-8 offset-lg-2 mt-3">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstname" className="form-control"/>
          </div>
          <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastname" className="form-control"/>
          </div>
          <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" className="form-control"/>
          </div>
          <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" className="form-control"/>
          </div>
          <div className="form-group">
            <div className="btn btn-blue">
              Register
            </div>
            <Link to="/login" className="btn btn-link">Return</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;