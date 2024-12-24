import React from 'react'
import { useSelector } from 'react-redux'
import TitleSection from './TitleSection'

const RecommendSection = () => {
    const { recommend } = useSelector((state) => state.fetch)
  return (
    <div>
        <TitleSection section="Featured" title="Recommended" />
        <div className='grid grid-cols-4 grid-rows-4 my-10 md:gap-6 gap-3'>
            <div className='col-span-2 lg:row-span-4 row-span-2 min-h-36 rounded overflow-hidden'>
                <img src={recommend[0].image} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='col-span-2 row-span-2 min-h-36 rounded overflow-hidden'>
                <img src={recommend[1].image} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='lg:col-span-1 col-span-2 row-span-2 min-h-36 rounded overflow-hidden'>
                <img src={recommend[2].image} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='lg:col-span-1 col-span-2 row-span-2 min-h-36 rounded overflow-hidden'>
                <img src={recommend[3].image} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    </div>
  )
}

export default RecommendSection