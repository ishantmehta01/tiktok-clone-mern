import React, { useEffect, useState } from "react";
import Video from "./Video";
import "./App.css";
import axios from "./axios";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("v2/posts");
      setPosts(response.data);
      return response;
    }
    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {posts.map(p => (
          <Video key={p.src} {...p} />
        ))}
      </div>
    </div>
  );
}

export default App;
