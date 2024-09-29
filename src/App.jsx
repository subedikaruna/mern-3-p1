import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SingleBlog from "./SingleBlog";
import CreateBlog from "./CreateBlog";
import EditBlog from "./EditBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/create" element={<CreateBlog/>} />
     
        <Route path="/blog/:id" element={<SingleBlog/>} />
        <Route path="/edit/:id" element={<EditBlog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
