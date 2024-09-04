import React ,{ useState}from "react";
// import LoadingBar from 'react-top-loading-bar';
import "./login.css";
import Frame1 from "../images/Frame1.png";


const Login = () => {
  const [username,setUsername] =useState('')
  const [password,setPassword] =useState('')
  // const name = useRef(null)
  const handleLogin = (e) => {
    console.log('Logging in width:',username, password);

    if (username === 'exampleUser' && password === 'examplePassword') {
      alert('Login successful!');
    }else{
      alert('<h1>Invaild credentials. Please try agin.   phir se sign in kar log in ve</h1>');
    }
  };



    return (
      

      
  <>
      
      <div className="log">
      <div>
            <img src={Frame1} />
          </div>
      <div className="log1"> 
      <h1>LOG IN</h1>
      <br />
    
        
          <label>Username:</label><br />
          <input type="text"  placeholder="username"  value={username} onChange={(e)=>setUsername(e.target.value)} />
               <br />
               <br />
               
          <label>Password:</label><br />
          <input type="password"  placeholder="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
               <br />
               <br />
               
               
          <br />
          {/* <LoadingBar color='green' ref={ref} /> */}
          <button onClick={handleLogin}>Log in</button><br />
          <p>Forget Account?/<a href="/Sign"><strong>Register</strong></a></p>
          <h1>id:{username}password:{password}</h1>
          <h1></h1>

        </div>
        <div>
            <img src={Frame1} />
          </div>

      </div>
  
      
  
  
        </>
    );
  };
  
  export default Login ;


  