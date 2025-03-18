import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<h2>Login Page</h2>} />
        <Route path="/add-idea" element={<h2>Add Idea Page</h2>} />
        <Route path="/profile" element={<h2>Profile Page</h2>} />
        <Route path="/messages" element={<h2>Messages Page</h2>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
