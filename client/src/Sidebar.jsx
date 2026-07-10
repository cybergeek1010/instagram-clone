import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='m-3'>
        <div className='d-flex flex-column gap-3'>
            <img className='logo-text' src="src\assets\instatext.webp" alt="" />
            <div className=''><i class="bi bi-house-door"></i>Home</div>
            <div className=''><i class="bi bi-search"></i>Search</div>
            <div className=''><i class="bi bi-compass"></i>Explore</div>
            <div className=''><i class="bi bi-collection-play-fill"></i>Reels</div>
            <div className=''><i class="bi bi-send-fill"></i> Messages</div>
            <div className=''><i class="bi bi-bell"></i>Notifications</div>
            <div className=''><i class="bi bi-plus-square"></i>Create</div>
            <div className=''><i class="bi bi-person-circle"></i> <Link to="/profile">Profile</Link></div>
        </div>

        <div  className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
            <div className=''><i class="bi bi-threads-fill"></i>Threads</div>
            <div className=''><i class="bi bi-list"></i>More</div>
        </div>
    </div> 
    
  )
}

export default Sidebar