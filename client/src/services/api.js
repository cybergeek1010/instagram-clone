import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:5000"
});
export const getPosts=()=>API.get("/posts");
export const createPost =(data)=>{
    const token=localStorage.getItem("token");
    return API.post("create-post",
        data,{
            headers:{
                Authorization:token
            }
        });
}
export const getStories=()=>API.get("/stories");
export const getSuggestions=()=>API.get("/suggestions");
export const likePost =(id)=>{
    const token=localStorage.getItem("token");
   return API.put(`/posts/${id}/like`,
    {},
    {
        headers:{
            Authorization:token
        }
    }
   );
}
export const addComment= (id,data)=>{
    const token=localStorage.getItem("token");
   return API.post(`/posts/${id}/comment`,data,
    {
        headers:{
             Authorization:token
        }
    }
   );
   
}
export const loginUser = (data)=>
    API.post("/login",data);

export const registerUser=(data)=>{
    return API.post("/register",data);
};
export const deletePost = (id)=>{
    const token = localStorage.getItem("token");
    return API.delete(
        `/posts/${id}`,{
            headers:{
                Authorization:token
            }
        }
    )
}

export const getProfile=()=>{
    const token = localStorage.getItem("token");
    return API.get("/profile",{
        headers:{
            Authorization:token
        }
    });
}

export const getProfilePosts=()=>{
    const token = localStorage.getItem("token");2
    return API.get("/profile/posts",{
        headers:{
            Authorization:token
        }
    });
}
export const followUser=(id)=>{
    const token=localStorage.getItem("token");
    return API.put(
        `/follow/${id}`,
        {},
        {
            headers:{
                Authorization:token
            }
        }
    )
}
export const getUserProfile = (id)=>{

    const token = localStorage.getItem("token");

    return API.get(

        `/profile/${id}`,

        {
            headers:{
                Authorization:token
            }
        }

    );

}

export const getUserPosts =(id)=>{
    const token = localStorage.get("token");
    return API.get(
        `/profile-posts/${id}`,
        {
            headers:{
                Authorization:token
            }
        }
    )
}