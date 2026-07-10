import React,{useState,useEffect} from 'react'
import {getProfile,getProfilePosts,getUserProfile,getUserPosts} from './services/api';
import { useParams } from 'react-router-dom';


function Profile() {
    
    const [user,setUser]=useState(null);
    const [posts,setposts]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        fetchProfile();
    },[]);
    const fetchProfile = async()=>{
    try{

        let profile;

        if(id){
            profile = await getUserProfile(id);
        }else{
            profile = await getProfile();
        }

        setUser(profile.data);

        let myPosts;
        if(id){
            myPosts = await getUserPosts(id);
        }else{
            myPosts = await getProfilePosts();
        }
        setposts(myPosts.data);

    }catch(err){
        console.log(err);
    }
}
    if(!user) return <h2>Loading...</h2>
  return (
    <div className='container mt-5'>
        <div className='row-align-items-center'>
            <div className='col-md-4 text-center'>
                <img src={user.profileImage} 
                    alt=""
                    style={{width:"170px",
                    height:"170px",
                    borderRadius:"50%",
                    objectFit:"cover"
            }} />
        </div>
            <div className='col-md-8'>
                <h2>{user.username}</h2>
            </div>
            <div className='d-flex gap-5 mt-3'>

               <div className='d-flex flex-column align-items-center'>
                <strong>{posts.length}</strong>
                <span>Posts</span>
               </div>

               <div className='d-flex flex-column align-items-center'>
                <strong>0</strong>
                <span>Followers</span>
               </div>

               <div className='d-flex flex-column align-items-center'>
                <strong>0</strong>
                <span>Following</span>
               </div>

            </div>
            <div className='mt-4'>
                <p className='fw-bold mb-1'>
                    {user.username}
                </p>
                <p className='text-muted'>
                    {user.bio}
                </p>
            </div>
            <button className='btn btn-outline-dark'>Edit Profile</button>
        </div>
        <hr className='my-5'/>
        <div className='row'>
            {
                posts.map((posts)=>(
                    <div className='col-md-4 mb-4' key={posts._id}>
                        <img src={posts.postsImage}
                         alt=""
                         className='img-fluid'
                         style={{
                            width:"100px",
                            height:"300px",
                            objectFit:"cover",
                            cursor:"pointer"
                         }} />
                         
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Profile