import React from 'react'
import {useState, useContext} from 'react'
import GFinderContext from '../context/GFinderContext'
import AlertContext from '../context/Alert/AlertContext'

function UserSearch() {
const [text, setText] = useState('')

const {users,SearchUsers,ClearUsers} = useContext(GFinderContext)
const {SetAlert} = useContext(AlertContext)

const handleChange = (e) => {
setText(e.target.value);

}

const handleSubmit = (e)=> {
    e.preventDefault()
    if(text === ''){
        SetAlert('pls enter something','error')
    }else{
        SearchUsers(text)
        setText('')
    }
}

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 
    lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <div className='relative'>
                    <input className='w-full pr-40 bg-gray-200 
                    input input-lg text-black' value={text} placeholder='search'
                    onChange={handleChange}>
                    </input>
                    <button type='submit' className='absolute top-0 right-0 
                    rounded-l-none w-36 btn btn-lg'>
                        GO
                    </button>
                </div>
            </div>
        </form>

      </div>
      {users.length > 0 && 
      (<div>
      <button onClick={ClearUsers} className='btn btn-ghost btn-lg'>
          clear
      </button>
      </div>)
}
      
      </div>
   
  )
}

export default UserSearch
