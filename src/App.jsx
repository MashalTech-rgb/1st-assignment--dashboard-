
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./components/login";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

