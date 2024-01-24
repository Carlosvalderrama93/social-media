import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./app/Navbar";
import Home from "./app/Home";
import Post from "./features/posts/Post";
import EditPost from "./features/posts/EditPost";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:postId" element={<Post />} />
          <Route path="/edit/:postId" element={<EditPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
