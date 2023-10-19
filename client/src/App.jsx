import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/users/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/sign_up" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
