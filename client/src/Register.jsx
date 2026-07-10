import React,{useState} from 'react'
import {registerUser} from './services/api'
import {useNavigate} from 'react-router-dom'

function Register() {
    const navigate = useNavigate();
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[profileImage,setProfileImage]=useState("");

    const handleRegister=async()=>{
        try{
            const data={
                username,
                email,
                password,
                profileImage
            };
            await registerUser(data);
            alert("Registraion Successful!!")
            navigate("/login");
        }catch(err){
            console.log(err);
        }
    };

  return (
    <div className='container mt-5'>
        <h2>Register</h2>
        <input type="text" 
        className='form-contol mb-3'
        placeholder='username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)} />
        <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Profile Image URL"
                value={profileImage}
                onChange={(e) => setProfileImage(e.target.value)}
            />

            <button
                className="btn btn-success"
                onClick={handleRegister}
            >
                Register
            </button>

        </div>
    
    
  )
}

export default Register