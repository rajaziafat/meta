import React from 'react'
import Logo from '../../assets/images/logo.png'
import {FaTwitter,FaInstagram} from 'react-icons/fa'
import DecordIcon from '../../assets/images/decord.png'

function Footer() {
    return (
        <>
        <div className="flex flex-col items-center py-14" style={{background:"rgba(255,255,255,)"}}>
            <div className="flex items-center justify-center">
                        <div className="relative">
                        <img src={Logo} alt="logo" srcset="" />
                        <div className="w-2 h-2 rounded-full bg-[orange] absolute top-[42%] left-[42%]"></div>
                        </div>
                        <h4 className="text-white ml-3 text-[24px] font-semibold">METAESTATE</h4>
                    </div>
                    <h1 className="sm:text-[32px] text-[24px] font-black text-white mt-4">JOIN THE COMMUNITY</h1>
                    <div className="flex mt-7">

                        <div className="text-black footer-social w-8 h-8 rounded-full flex items-center justify-center"><a href="#insta"><FaInstagram className="text-xl"/></a></div>

                            <div className="ml-4 text-black footer-social w-8 h-8 rounded-full bg-[#FFFA7E] flex items-center justify-center"><a href="#twitter"><FaTwitter className="text-xl"/></a></div>

                            <div className="ml-4 text-black w-8 footer-social h-8 rounded-full flex items-center justify-center"><a href="#decord"><img src={DecordIcon} className="w-[20px] h-[14px]" alt=""/></a></div>
                        </div>
        </div>
        <div className="flex justify-center text-white py-2" style={{background:"rgba(255,255,255,.08)"}}>
            <p className="sm:text-[16px] text-[12px]">Copyright © 2021 <span className="text-[#D8FB50]"> MetaEstate</span> All rights reserved.</p>
        </div>
        </>
    )
}

export default Footer
