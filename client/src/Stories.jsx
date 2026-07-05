import React from 'react'
const stories = [
  {
    id: 1,
    username: "john_doe",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    username: "sarah",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    username: "alex",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    username: "emma",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    username: "david",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 6,
    username: "jack",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 7,
    username: "john_doe",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 8,
    username: "john_doe",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 9,
    username: "john_doe",
    image: "https://i.pravatar.cc/150?img=10",
  },
];
function Stories() {
  return (
    <div className='card p-3 mb-4'>
      <div className='d-flex' style={{overflowX:"auto",scrollbarWidth:"5px",gap:"20px",}}>
        {stories.map((story)=>(
          <div key={story.id} className='text-center' style={{minwidth:"70px"}}>
            <img src={story.image} alt="" style={{ width: "65px",
                height: "65px",
                borderRadius: "50%",
                border: "3px solid #ff007f",
                padding: "2px",
                objectFit: "cover",}} 
              />
              <small>{story.username}</small>

          </div>

        ))}
      </div>
    </div>
  )
}

export default Stories