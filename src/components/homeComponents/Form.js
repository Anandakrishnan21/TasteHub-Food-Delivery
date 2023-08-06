import React from 'react'

function Form() {
  return (
    <form className='w-full flex flex-col justify-around items-center'>
        <div className='w-4/5 flex flex-col justify-around'>
            <label for="name" className='font-semibold'>Name</label>
            <input type='text' placeholder='Full Name' className='w-full h-10 p-2 rounded'/>
        </div>
        <div className='w-4/5 flex flex-col justify-around'>
            <label for="email" className='font-semibold'>Email</label>
            <input type='email' placeholder='Email' className='w-full h-10 p-2 rounded'/>
        </div>
        <div className='w-4/5 flex flex-col justify-around'>
            <label for="phone" className='font-semibold'>Phone</label>
            <input type='text' placeholder='Phone' className='w-full h-10 p-2 rounded'/>
        </div>
        <div className='w-4/5 flex flex-col justify-around'>
            <label for="message" className='font-semibold'>Message</label>
            <textarea className='w-full h-16 p-2 mb-2 rounded resize-none' placeholder='Message' />
        </div>
        <div className='w-4/5 flex flex-col justify-around'>
            <button type='submit' className='w-full h-10 mb-2 bg-rose-600 rounded text-white text-xl'>Send</button>
        </div>
    </form>
  )
}

export default Form
