import React from 'react'
import UserResults from '../components/users/UserResults'
import {GFinderProvider} from '../context/GFinderContext'
import UserSearch from '../components/UserSearch'


function Home() {
  return (
    <GFinderProvider>
      <div>
        <UserSearch/>
        <UserResults/>
    </div>
    </GFinderProvider>
    
  )
}

export default Home
