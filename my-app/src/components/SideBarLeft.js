import React from 'react';
import logo from '../assets/logo.png'
import { sideBarMenu } from '../ultis/menu';
import { NavLink } from 'react-router-dom';

const notActiveStyle = 'py-2 px-[25px] font-bold flex gap-[12px] items-center text-[#32323D] text-[13px]';
const activeStyle = 'py-2 px-[25px] font-bold flex gap-[12px] items-center text-[#0F7070] text-[13px]';

const SideBarLeft = () => {
    return (
        <div className='flex flex-col bg-[#DDE4E4]'>
            <div className='w-full h-[70px] py-[15px] px-[25px] flex-grow justify-center items-center'>
                <img src={logo} alt="logo" className='w-[120px] h-10 object-cover' />
            </div>
            <div className='flex flex-col'>
                {sideBarMenu.map(item => (
                    <NavLink
                        key={item.path}
                        end={item.end}
                        to={item.path}
                        className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
                    >
                        <span>{item.icon}</span>
                        <span>{item.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default SideBarLeft