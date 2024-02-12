import React ,{ useState}from "react";
// import LoadingBar from 'react-top-loading-bar';
import "./login.css";


const Login = () => {
  const [username,setUsername] =useState("")
  const [password,setPassword] =useState("")
  // const name = useRef(null)
  const handleLogin =() => {
    console.log('Logging in width:',username, password);
  };

    return (
  <>
      
      <div className="log">
      <div className="log1"> 
      <h1>LOG IN</h1>
      <br />
    
        
          <label>Username:</label><br />
          <input type="text"  placeholder="username"  value={username}onChange={(e)=>setUsername(e.target.value)} />
               <br />
               <br />
               
          <label>Password:</label><br />
          <input type="password"  placeholder="password"  value={password}onChange={(e)=>setPassword(e.target.value)} />
               <br />
               <br />
               
               
          <br />
          {/* <LoadingBar color='green' ref={ref} /> */}
          <button onClick={handleLogin}>Log in</button><br />
          <p>Forget Account?/<strong>Register</strong></p>
          <h1>id:{username}password:{password}</h1>
          <h1></h1>

        </div>

      </div>
  
      
  
        </>
    );
  };
  
  export default Login ;