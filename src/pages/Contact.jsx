import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEyeSlash } from "react-icons/fa";

const Contact = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first: "",
    last: "",
  });

  const [message, setMessage] = useState("");
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!form.first || !form.last) {
      setMessage("⚠️ Please fill all information!");
      return;
    }

    setMessage("✅ Login Successful!");


    setTimeout(() => {
      navigate("/success");
    }, 2000);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}  >
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-xl bg-white/10 border border-white/30 
        p-8 rounded-3xl w-full max-w-[350px] shadow-2xl text-white"
      >

        <h1 className="text-3xl font-bold mb-2">Login</h1>

        <p className="text-sm mb-6 text-gray-200">
          Welcome back please login to your account
        </p>

        
        <div className="relative mb-4">
          <input type="text"name="first" placeholder="User Name"value={form.first}onChange={handleChange}className="w-full p-3 pr-10 rounded-xl bg-transparent   border border-white/30 placeholder-gray-300 
            focus:outline-none"
          />

          <FaUser className="absolute right-3 top-4 text-gray-300" />
        </div>

    
        <div className="relative mb-4">
          <input type="password"  name="last"placeholder="Password"  value={form.last}onChange={handleChange}   className="w-full p-3 pr-10 rounded-xl bg-transparent 
            border border-white/30 placeholder-gray-300 
            focus:outline-none"
          />

          <FaEyeSlash className="absolute right-3 top-4 text-gray-300" />
        </div>

        <div className="flex items-center mb-5">
          <input
            type="checkbox"
            className="mr-2 accent-green-500"
          />

          <span className="text-sm">Remember me</span>
        </div>

        
        <button type="submit"className="w-full p-3 rounded-xl font-semibold  bg-gradient-to-r from-green-300 to-green-700 
          hover:scale-105 duration-300"
        >
          Login
        </button>

       
        <p className="text-center text-sm mt-4 text-gray-200">
          Don’t have an account?{" "}
          <span className="underline cursor-pointer">
            Signup
          </span>
        </p>
        {message && (
          <p className="text-center mt-4 text-sm font-medium">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;