import React, {useState} from 'react';
import "./sign.css";

const Sign = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            firstName,
            lastName,
            username,
            email,
            password,
            phone,
        };

         console.log('Registration data:', userData);



        const newErrors = {};
        if (!firstName.trim()) newErrors.firstName = 'First name is required';
        if (!lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!username.trim()) newErrors.username = 'username is required';
        if (!email.trim()) newErrors.email = 'Email is required';
        if (!password.trim()) newErrors.password = 'password is required';
        if (!phone.trim()) newErrors.phone = 'phone no is required';

        if(Object.keys(newErrors) .length > 0){
            setErrors(newErrors);
            return;
        }
        alert('Registration Successful !');
    };

       
  
  return (
    <>

<div className="sign">
    
      <div className="sign1"> 
      <h1>SIGN IN</h1>
      <br />
<form onSubmit={handleSubmit}>
      <label>Firstname:<br />
          <input type="text" placeholder='firstname' value={firstName}onChange={(e) => setFirstName(e.target.value)} />
          {errors.firstName && <span>{errors.firstName}</span>}
          </label>
      <br />
               <br />

               <label>Lastname:<br />
          <input type="text" placeholder='lastname' value={lastName}onChange={(e) => setLastName(e.target.value)} />
          {errors.lastName && <span>{errors.lastName}</span>}
          </label>
      <br />
               <br />
          <label>Username:<br />
          <input type="text"  placeholder="username"  value={username}onChange={(e) => setUsername(e.target.value)} />
          {errors.username && <span>{errors.username}</span>}
          </label>
               <br />
               <br />

               <label>Email:<br />
          <input type="email" placeholder='gmail'  value={email}onChange={(e) => setEmail(e.target.value)}/>
          {errors.email && <span>{errors.email}</span>}
          </label>
      <br />
               <br />

               
          <label>Password:<br />
          <input type="password"  placeholder="password"  value={password}onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <span>{errors.password}</span>}
          </label>
               <br />
               <br />

               <label>Phone:<br />
          <input type="tel" placeholder='mobile number'  value={phone}onChange={(e) => setPhone(e.target.value)}/>
          {errors.phone && <span>{errors.phone}</span>}
          </label>
      <br />
               <br />
               <button onClick={handleSubmit}>submit</button><br />
               </form>

               </div>
               </div>



</>
    );
  };
  
  export default Sign ;