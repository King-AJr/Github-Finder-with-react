import React from 'react'
import giphy from './giphy.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img src={giphy} alt='loading'
      className='text-center mx-auto'/>
    </div>
  )
}

export default Spinner
