import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-idea" element={<h2>Add Idea Page</h2>} />
        <Route path="/profile" element={<h2>Profile Page</h2>} />
        <Route path="/messages" element={<h2>Messages Page</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
