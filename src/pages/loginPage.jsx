import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login() {
    try{
        const response = await axios.post(
      import.meta.env.VITE_API_URL + "/api/users/login",
      {
        email: email,
        password: password,
      }
    );
    localStorage.setItem("token",response.data.token)
    toast.success("Login successfull")
    const user = response.data.user;
    if(user.role == "admin"){
        navigate("/admin")
    }
    else{
        navigate("/")
    }
    }catch(e){
        console.error("Login failed:",e)
        //alert("Login failed. Please check your credentials.")
        toast.error("Login failed. Please check your credentials.")
    }
  }

  return (
    <div className="w-full h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
      {/* Overlay for soft glow */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Main container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 w-[90%] max-w-5xl">
        {/* Left side: logo & tagline */}
        <div className="hidden md:flex flex-col items-center justify-center text-center w-1/2 text-white space-y-6">
          <img src="/logo.png" alt="CBC Logo" className="w-40 drop-shadow-lg" />
          <h1 className="text-4xl font-bold tracking-wide">
            Crystal Beauty Clear
          </h1>
          <p className="text-lg text-gray-200 max-w-md">
            Step into elegance. Discover your inner glow with CBC.
          </p>
        </div>

        {/* Right side: Login box */}
        <div className="w-full md:w-1/2 flex justify-end items-center">
          <div className="w-[380px] bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-10 flex flex-col items-center gap-6">
            <h2 className="text-2xl font-semibold text-white mb-2 tracking-wide">
              Welcome Back
            </h2>

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full h-[45px] px-4 rounded-xl bg-white/90 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full h-[45px] px-4 rounded-xl bg-white/90 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />

            <button
              onClick={login}
              className="w-full h-[45px] mt-4 bg-[var(--color-accent)] hover:bg-orange-500 text-white font-semibold rounded-xl shadow-md transition-all duration-300"
            >
              Login
            </button>

            <p className="text-sm text-gray-200 mt-2">
              Don’t have an account?{" "}
              <a href="#" className="text-[var(--color-accent)] font-semibold hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
