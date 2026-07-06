import React,{useEffect,useState}from 'react'
import{getPosts,likePost,addComment} from "./services/api";

function Posts({posts,setPosts}) {
    // const[posts,setPosts]=useState([]);
    const[likedposts,setLikedPosts]=useState([]);
    const[comment,setComment]=useState([]);
    const handleLike=async(id)=>{
        try{
            await likePost(id);
            const res = await getPosts();
            setPosts(res.data);
            setLikedPosts((prev)=>[...prev,id])
        } catch(err){
            console.log(err);
        }
    };
    const handleComment= async(id)=>{
        console.log("buttonclicked")
        await addComment(id,{
            username:"arshad",
            text:comment,
        });
        getPosts().then((res)=>setPosts(res.data));
        setComment("");
    };

    // useEffect(()=>{
    //     fetchPosts();
    // },[]);
    // async function fetchPosts(){
    //     try{
    //         const response = await getPosts();
    //         console.log(response.data);
    //         setPosts(response.data);
    //     } catch(error){
    //         console.log(error);
    //     }
    // }

  return (
    <div className='txt-color card shadow-sm mb-4 border-0 rounded-4'>
        {
            posts?.map((post)=>(
                <div key={post._id} className='card shadow-sm broder-0 mb-4' style={{maxWidth:"550px",margin:"auto"}}>
                    <div className='card-body '>
                        <div className='d-flex align-items-center mb-3'>
                            <img src={post.profileImage} alt="" style={{width:"45px",height:"45px",borderRadius:"50%",objectFit:"cover"}} />
                            <h6 className='ms-2 mb-0 fw-bold'>
                                {post.username}
                            </h6>
                        </div>
                        <img src={post.postImage} alt="" style={{width:"100%",maxHeight:"400px",objectFit:"cover"}} className='img-fluid'/>
                         <div className="d-flex fs-4 mt-3 px-0 ">

                            <i className={likedposts.includes(post._id)?"bi bi-heart-fill text-danger":"bi bi-heart"} onClick={()=>handleLike(post._id)}></i>

                            <i className="bi bi-chat me-3"></i>

                            <i className="bi bi-send"></i>
                        </div>
                        <div>
                            <p className='fw-bold mt-2 mb-1'> {post.likes} likes</p>
                            <p className='mb-0'>{post.caption}</p>
                             {post.comments.map((comment,index)=>(
                                <p key={index}>
                                    <strong>{comment.username}</strong> {comment.text}
                                </p>

                             ))}
                            <input type="text" placeholder='add a comment' value={comment} onChange={(e)=>setComment(e.target.value)}/>
                            <button onClick={()=>handleComment(post._id)} className='btn btn-primary'>Post</button>
                        </div>
                        
</div>
                         
                    
                </div>

            ))
        }
    </div>
  );
}

export default Posts;