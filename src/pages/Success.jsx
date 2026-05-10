import { useState } from "react";

const Success = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showPayment, setShowPayment] = useState(false);

  const handleSelect = (plan) => {
    setSelectedPlan(plan);

    setShowPayment(true);
  };

  return (
    <div className="bg-black text-white min-h-screen p-6 flex flex-col items-center">

  
      <h1 className="text-4xl mb-4">🎉 Success!</h1>
      

      <p className="mb-8">Your details have been submitted successfully!</p>

      <h2 className="text-2xl mb-6">Choose Your Plan</h2>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">

   
        <div
          onClick={() => handleSelect("1 Month - ₹199")}
          className={`p-6 rounded-xl cursor-pointer border ${
            selectedPlan === "1 Month - ₹199"
              ? "border-red-500"
              : "border-gray-700"
          }`}
        >
          <h3 className="text-xl mb-2">1 Month</h3>
          <p className="text-gray-400">₹199</p>
        </div>


        <div
          onClick={() => handleSelect("5 Months - ₹799")}
          className={`p-6 rounded-xl cursor-pointer border ${
            selectedPlan === "5 Months - ₹799"
              ? "border-red-500"
              : "border-gray-700"
          }`}
        >
          <h3 className="text-xl mb-2">5 Months</h3>
          <p className="text-gray-400">₹799</p>
        </div>

        
        <div
          onClick={() => handleSelect("1 Year - ₹1499")}
          className={`p-6 rounded-xl cursor-pointer border ${
            selectedPlan === "1 Year - ₹1499"
              ? "border-red-500"
              : "border-gray-700"
          }`}
        >
          <h3 className="text-xl mb-2">1 Year</h3>
          <p className="text-gray-400">₹1499</p>
        </div>

      </div>


      {showPayment && (
        <div className="mt-10 bg-gray-900 p-6 rounded-xl w-full max-w-md">

          <h3 className="text-xl mb-4 text-center">
            Payment for {selectedPlan}
          </h3>

          <select className="w-full p-2 mb-4 bg-gray-800">



            <option>Select Payment Method</option>

            <option>UPI</option>

            <option>Credit Card</option>

            <option>Debit Card</option>
          </select>

          <button className="w-full bg-green-600 p-2 rounded">
            Pay Now
          </button>

        </div>
      )}

    </div>
  );
};

export default Success;