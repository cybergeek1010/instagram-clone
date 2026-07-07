import React,{useState,useEffect} from 'react'
import { loginUser } from './services/api';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const handlelogin = async ()=>{
        try{
            const data = {
                email,
                password,
            };
            const res = await loginUser(data);
            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );
            if(res.data.message ==="login succesfull"){
                navigate("/")
            }
            alert(res.data.message);
            setEmail("")
            setPassword("");
        }catch(err){
            alert("login failed");
            console.log(err);
        }
    }
  return (
    <div className='container mt-5' style={{maxWidth:"400px"}}>
        <h3>login</h3>
        <input type="email" 
        className='form-control mb-3'
         placeholder='email'
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} />
        
        <input type="password" 
        className='form-control mb-3' 
        placeholder='password' 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}/>

        <button className='btn btn-primary w-100' 
        onClick={handlelogin}>Login</button>

    </div>
  )
}

export default Login;
