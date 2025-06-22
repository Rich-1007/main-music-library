import { useState } from "react";
import { useAuth } from "../context/auth";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fixedCredentials = {
    user: {
      username: "user@example.com",
      password: "password123",
      role: "user",
    },
    admin: {
      username: "admin@example.com",
      password: "adminpassword",
      role: "admin",
    },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      username === fixedCredentials.user.username &&
      password === fixedCredentials.user.password
    ) {
      login(fixedCredentials.user);
    } else if (
      username === fixedCredentials.admin.username &&
      password === fixedCredentials.admin.password
    ) {
      login(fixedCredentials.admin);
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Username:
            </label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              placeholder="e.g., user@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              placeholder="********"
              required
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm italic mb-4 text-center">
              {errorMessage}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
