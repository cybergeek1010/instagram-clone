import React,{useState,useEffect}from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './suggestions'
import CreatePost from './CreatePost'
import { getPosts } from './services/api'


function App() {
  const[posts,setPosts]=useState([]);
  useEffect(()=>{
    fetchPosts();
  },[]);
  async function fetchPosts(){
    const res = await getPosts();
    console.log(res.data);
    setPosts(res.data);
  }
console.log(posts)
  return (
    
    <div className='d-flex vh-100 '>
        <div className='w-20'><Sidebar/></div>
        <div className='w-50 overflow-auto' style={{height:"100vh"}}>
           <CreatePost/> 
           <Feed 
           posts={posts}
           setPosts={setPosts}/>
           </div>
        <div className='w-30'><Suggestions/></div>
        
       
    </div>
  )
}
/*w-25 w-50 or w-75 bootstrap width classes*/

export default App