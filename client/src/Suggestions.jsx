import React, {useState,useEffect} from 'react';
import { getSuggestions } from "./services/api.js";
// const users=[{
//      id: 1,
//     username: "john_doe",
//     image: "https://i.pravatar.cc/150?img=11"
//   },
//   {
//     id: 2,
//     username: "sarah_lee",
//     image: "https://i.pravatar.cc/150?img=12"
//   },
//   {
//     id: 3,
//     username: "alex_07",
//     image: "https://i.pravatar.cc/150?img=13"
//   },
//   {
//     id: 4,
//     username: "emma",
//     image: "https://i.pravatar.cc/150?img=14"
//   },
//   {
//     id: 5,
//     username: "david",
//     image: "https://i.pravatar.cc/150?img=15"

// }]

function Suggestions() {
    const [users,setUsers]=useState([]);
        useEffect(()=>{
            getSuggestions()
            .then((res)=> setUsers(res.data))
            .catch(console.error);
        },[])
  return(
    <div className='p-3'>
        <div className='d-flex align-items-centre justify-content-between mb-4'>
            <div className='d-flex align-items-center'>
                <img src="https://i.pravatar.cc/150?img=5" alt="" style={{width:"50px",height:"50px",borderRadius:"50%"}}/>
                <div className='ms-3'>
                    <h6 className='mb-0'>arshad</h6>
                    <small className='text-secondary'> developer</small>
                </div>
            </div>
            <button className='btn btn-primary btn-sm px-3 fw-semibold'>switch</button>
        </div>
        <div>
            <div className='d-flex justify-content-between mb-3'>
                <span className='fw-bold text-secondary'>Suggested for you</span>
                <small className='fw-bold'>See All</small>

            </div>
            {users.map((user)=>(
                <div key={user.id} className='d-flex align-items-center justify-content-between mb-3'>

                    <div className="d-flex align-items-center">

                        <img
                        src={user.image}
                        alt=""
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%"
                        }}
                        />

                        <div className="ms-3">
                        <h6 className="mb-0">{user.username}</h6>
                        <small className="text-secondary">
                            Suggested for you
                        </small>
                        </div>

                    </div>

                    <button className="btn btn-primary btn-sm px-3 fw-semibold">
                        Follow
                    </button>

                </div>
            
            ))}
        </div>
    </div>
    );
 }


export default Suggestions;