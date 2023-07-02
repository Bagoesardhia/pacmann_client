"use client"
import { useEffect, useState } from "react";

export function name(){
  const name = username
  return name
}

export default function loginScreen() {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin(){
    try{
      const res = await fetch('http://127.0.0.1:5000/api/v1/login', {
        method: 'POST',
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify({ username, password })
      })
      console.log(res);
      if (res.ok){
        alert("Login successful");
        window.location.href = "/dashboard";
      }else{
        alert('Login failed')
        console.log("Error:", res.JSON.stringify());
      }

    }catch(e){
      console.log('error: ' , e.message)
    }
  } 

  localStorage.setItem('username', username);
  const value = localStorage.getItem('username');
  console.log(value);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
