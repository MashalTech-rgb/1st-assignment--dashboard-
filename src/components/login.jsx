import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      setIsSignedUp(true);
      setTimeout(() => {
        window.location.href = "/dashboard"; // Redirect to dashboard page after successful signup
      }, 3000); // Delay before redirect
    }
  };

  if (isSignedUp) {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="w-full max-w-md p-4 bg-black rounded-lg shadow-md border border-white">
          <h2 className="text-2xl font-bold text-white text-center">Sign Up Successful!</h2>
          <p className="mt-4 text-center text-white">
            Welcome...!
            Your account has been created successfully.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className=" w-1/3 max-w-md p-6 bg-black rounded-lg shadow-md border  border-white">
        <h1 className="text-2xl font-bold text-white text-center">Sign Up</h1>
        <form className="" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="">
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="my-2 w-full p-1 border text-sm border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              required
            />
          </div>
          {/* Email Input */}
          <div className="">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="my-2 w-full p-1 border text-sm border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              required
            />
          </div>
          {/* Password Input */}
          <div className="">
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
              className="my-2 w-full  p-1 border text-sm border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              required
            />
          </div>
          {/* Confirm Password Input */}
          <div className="">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="my-2 w-full  p-1 border text-sm border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full my-2  p-1 text-black bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Sign Up
          </button>
        </form>
        {/* Footer */}
        <p className="mt-2 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/dashboard" className="text-white hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
