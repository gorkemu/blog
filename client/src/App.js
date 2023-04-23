import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import ShowPostList from "./components/ShowPostList";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ShowPostList />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
