import React from 'react'
import VideosContainer from './VideosContainer'
import { ButtonList } from './ButtonList'


export const Feeds = () => {
  return (
   
   <div className='bg-gray-200 px-4 py-1 mt-1 '>
   <div className='bg-red-500'>
        <ButtonList/>
   </div>

    <VideosContainer/>

    </div>
  )
}
