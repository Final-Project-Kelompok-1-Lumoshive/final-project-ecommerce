import React from 'react'

const TitleSection = ({section, title}) => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex gap-4 items-center'>
                <div className='w-5 h-10 bg-red rounded'></div>
                <p className='font-poppins text-red font-semibold'>{section}</p>
            </div>
            <h2 className='font-inter text-4xl font-semibold'>{title}</h2>
        </div>
    )
}

export default TitleSection