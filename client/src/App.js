import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import AllPosts from "./components/AllPosts";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AllPosts />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
