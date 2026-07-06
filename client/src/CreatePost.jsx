import { useState } from "react";
import {createPost} from "./services/api"
import React from 'react'

function CreatePost() {
    const[username,setUsername]=useState("");
    const[profileImage,setProfileImage]=useState("");
    const[postImage,setPostImage]=useState("");
    const[caption,setCaption]=useState("");
    const handlecreatepost = async()=>{
        try{
            const data={
                username,
                profileImage,
                postImage,
                caption,
            };
            const res = await createPost(data);
            console.log(res.data);
            alert("post created!");
            setUsername("");
            setProfileImage("");
            setPostImage("");
            setCaption("");
        }catch(err){
            console.log(err);
        }
    }
    
  return (
    <div style={{
        border:"1px solid lightgray",
        padding:"20px",
        marginBottom:"20px",
        borderRadius:"10px",
    }}>
        <h3>Create New Post</h3>
        <input type="text"
         placeholder="Username"
         value={username}
         onChange={(e)=>setUsername(e.target.value)} />
        <br /><br />

        <input type="text"
         placeholder="profile image url"
         value={profileImage}
         onChange={(e)=>setProfileImage(e.target.value)} />
        <br /><br />

        <input type="text"
         placeholder="post image url"
         value={postImage}
         onChange={(e)=>setPostImage(e.target.value)} />
        <br /><br />
        <input type="text"
         placeholder="caption"
         value={caption}
         onChange={(e)=>setCaption(e.target.value)} />
        <br /><br />

        <button onClick={handlecreatepost} className="btn btn-primary">Create post</button>

    </div>
  )
}

export default CreatePost;