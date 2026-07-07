import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Suggestions from "./Suggestions";
import CreatePost from "./CreatePost";
import { getPosts } from "./services/api";


function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    fetchPosts();
    }, []);

  async function fetchPosts() {
    const res = await getPosts();
    setPosts(res.data);
  }
  return (
    <div className="d-flex vh-100">
        <div className="w-20">
            <Sidebar/>
        </div>
        <div className="w-50 overflow-auto"
     style={{height:"100vh"}}>
        <CreatePost setPosts={setPosts}/>
        <Feed posts={posts} setPosts={setPosts}/>
        </div>
        <div className="w-30">
            <Suggestions/>
        </div>
    </div>
  );
}

export default Home