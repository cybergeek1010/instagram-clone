import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './suggestions'

function App() {
  return (
    <div className='d-flex vh-100 '>
        <div className='w-20'><Sidebar/></div>
        <div className='w-50 overflow-auto' style={{height:"100vh"}}><Feed/></div>
        <div className='w-30'><Suggestions/></div>
    </div>
  )
}
/*w-25 w-50 or w-75 bootstrap width classes*/

export default App