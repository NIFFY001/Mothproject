import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/onboarding/Login";
import Signup from "./pages/onboarding/Signup";
import Otp from "./pages/onboarding/Otp";
import Acctsetup from "./pages/onboarding/Acctsetup";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="otp" element={<Otp />} />
        <Route path="acctsetup" element={<Acctsetup />} />
      </Routes>
    </Router>
  );
}

export default App;
