import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
  });

  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: 
        e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!form.first || !form.last || !form.email || !form.phone) {
      setMessage("⚠️ Please fill all fields");
      return;
    }

    setMessage("✅ Submitted Successfully!");

    setTimeout(() => {
      navigate("/success");
    }, 2000);
  };

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-xl w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          🎬 FilmyHit Contact
        </h1>

        <input
          type="text" name="first" placeholder="First Name"className="w-full p-2 mb-3 bg-gray-800"
          onChange={handleChange}
        />

        <input
          type="text" name="last"placeholder="Last Name"className="w-full p-2 mb-3 bg-gray-800"
          onChange={handleChange}
        />

        <input
          type="email"name="email"placeholder="Email"
         
          className="w-full p-2 mb-3 bg-gray-800"
          onChange={handleChange}
        />

        <input
          type="number"name="phone" placeholder="Phone Number"
          className="w-full p-2 mb-3 bg-gray-800"
          onChange={handleChange}
        />

        <button className="w-full bg-red-600 p-2 mt-2">
          Submit
        </button>

        {message && (
          <p className="text-center mt-4">{message}</p>
        )}
      </form>

    </div>
  );
};

export default Contact;