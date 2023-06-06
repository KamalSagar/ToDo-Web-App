import React from 'react'
import Item from './Item'

export default function Box(props) {
    const items = props.data.map(
        (singleData, index) => {
            return <Item removeHandler={props.removeHandler} key={index} id={index} item={singleData.item} time={singleData.time} />
        }
    )
    return (
        <div className='p-3 flex flex-col justify-center items-center space-y-8'>

            <h2 className='bg-gray-300 rounded w-[50%] text-bold text-center text-bold text-[20px]'>
                My Todo List
            </h2>

            <div className='flex flex-col w-[90%] space-y-2'>
                {items}
            </div>

        </div>
    )
}