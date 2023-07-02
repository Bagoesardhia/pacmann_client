// imports Dependencies
"use client"
import { useState } from "react";

// import components
import Navbar from "../components/navbar_comps";

export default function registerScreen() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  async function handleRegister() {
    try {
      const res = await fetch("http://127.0.0.1:5000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, username, password, role}),
      });

      if (res.ok){
        alert("User Success Registered");
      } else {
        alert("User Failed Registered",res.statusText);
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Register</h1>
              <p className="py-6">
                Registered new account to system for enter and used this system
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="Password"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <input
                  type="text"
                  placeholder="Role"
                  className="input input-bordered"
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleRegister}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
