import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:5000"
});
export const getPosts=()=>API.get("/posts");
export const createPost =(data)=>
     API.post("create-post",data);
export const getStories=()=>API.get("/stories");
export const getSuggestions=()=>API.get("/suggestions");
export const likePost =(id)=>API.put(`/posts/${id}/like`);
export const addComment= (id,data)=>API.post(`/posts/${id}/comment`,data);
export const loginUser = (data)=>
    API.post("/login",data);
