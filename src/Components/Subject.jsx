import React from 'react'

const Subject = ({subject,hour,increase,decrease,index}) => {
  return (
    <div className='flex gap-4'>
        <p>{subject}</p>
        <p>- {hour} hours</p>
        <button onClick={() =>increase(index)} className='p-2 bg-green-500 rounded-md'>+</button>
        <button onClick={() =>decrease(index)} className='p-2 bg-red-500 rounded-md'>-</button>
    </div>
  )
}

export default Subject