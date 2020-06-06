import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {userService} from '../../services';
import './Login.css';

const Login = () =>{
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });
  const [alert, setAlert] = useState({
    message: '',
    type: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loggingIn, setloggingIn] = useState(false);
  const { username, password } = inputs;
  const history = useHistory();
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
        login(username, password);
    }
  }
  // reset login status
  useEffect(() => { 
    userService.logout(); 
  }, []);

  function login(username,password){
    setloggingIn(true);
    userService.login(username,password)
      .then(
        user =>{
          setloggingIn(false);
          history.push("/");
        },
        error =>{
          setloggingIn(false);
          setAlert({message:'Error on Login',type:'alert-danger'})
        }
      );
  }


  return (
    <>
      <div className="col-lg-8 offset-lg-2 mt-3">
            {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-blue">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </form>
        </div>
    </>
  ); 
}

export default Login;