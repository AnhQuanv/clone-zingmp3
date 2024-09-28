import React from 'react'
import icons from '../ultis/icon'
import { Search } from '../components/index'

const { IoIosArrowBack, IoIosArrowForward } = icons;

const Header = () => {
    return (
        <div className='flex justify-between w-full items-center'>
            <div className='flex gap-6 w-full items-center'>
                <div className='flex text-gray-400 gap-6'>
                    <span><IoIosArrowBack size={24} /></span>
                    <span><IoIosArrowForward size={24} /></span>

                </div>
                <div className='w-1/2 '>
                    <Search />
                </div>
            </div>
            <div>
                login
            </div>

        </div>
    )
}

export default Header