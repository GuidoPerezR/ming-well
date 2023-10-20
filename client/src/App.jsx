import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/users/SignUp";
import MainPage from "./pages/MainPage";
import CreateDrawing from "./pages/drawings/CreateDrawing";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/accounts/login" />}></Route>
        <Route path="/accounts/login" element={<Index />}></Route>
        <Route path="/sign_up" element={<SignUp />}></Route>
        <Route path="/drawings" element={<MainPage />}></Route>
        <Route path="/create_drawing" element={<CreateDrawing />}></Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
