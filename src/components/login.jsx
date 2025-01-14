import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../public/assets/Logo.png"
import SwiftSell from "../../public/assets/SwiftSell.jpg"
const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role.toLowerCase() !== "cashier") {
      alert("Invalid role. Only 'cashier' is allowed.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Successfully signed up!");
      setIsSignedUp(true);
    }
  };

  if (isSignedUp) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md border border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Redirect to dashboard after login, passing email and password as initial values
              navigate("/dashboard", { state: { email, password } });
            }}
          >
            <div className="my-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email} // Pre-fill with the email from sign up
                disabled
                className="my-2 w-full p-2 border text-sm border-gray-300 rounded-md bg-gray-50 text-gray-700"
              />
            </div>
            <div className="my-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password} // Pre-fill with the password from sign up
                disabled
                className="my-2 w-full p-2 border text-sm border-gray-300 rounded-md bg-gray-50 text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="w-full my-2 p-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-1/3 max-w-md px-6 py-4 bg-white rounded-lg shadow-md border border-gray-300">
        <div className=" flex justify-center">
        <img  className=""    src={SwiftSell} width={30} height={30} alt="logo" />
      </div>
        <h1 className="text-xl font-bold text-indigo-700 text-center "> SwiftSell</h1>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="my-2 w-full p-2 border text-sm border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="my-2 w-full p-2 border text-sm border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
              className="my-2 w-full p-2 border text-sm border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="my-2 w-full p-2 border text-sm border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* Role Input */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="cashier"
              className="my-2 w-full p-2 border text-sm border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full my-2 p-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>
        {/* Footer */}
        <p className="mt-2 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/dashboard" className="text-indigo-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
