import React,{useState} from 'react';
import Logo from '../../assets/images/logo.png'
import DecordIcon from '../../assets/images/decord.png'
import HouseModel from '../../assets/images/HouseModel.png'
import {FaTwitter,FaInstagram,FaBars} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'

const Navbar = () => {
    const [check,setCheck]=useState(0)
    let handleOpen=()=>{
        setCheck(check+1)
        var bodys=document.querySelector("body").style
        bodys.overflowY="hidden"
    }
    let handleClose=()=>{
        setCheck(check-1)
        var bodys=document.querySelector("body").style
        bodys.overflowY="auto"
    }

    let handleClick=()=>{
      setCheck(check-1)
      var bodys=document.querySelector("body").style
      bodys.overflowY="auto"
  }
    
    return (
        <div className="relative" id="home">
        {check===0 &&(
        <div className="w-[100%] flex justify-center relative p-0 m-0">
            <div className="h-[400px] w-[400px] bg-white opacity-[.04] rounded-full absolute top-[-230px] right-[-100px] z-40 lg:flex hidden"></div>
            <div className="h-[256px] w-[256px] absolute rounded-full top-[-130px] left-[-130px] border-[50px] border-white opacity-[.04] z-40 lg:flex hidden"></div>
            <div className="w-full bg-black sm:rounded-b-full rounded-none md:h-[800px] sm:h-[700px] h-[600px] flex flex-col items-center">
            <img src={HouseModel} className="absolute lg:top-[58%] md:top-[65%] sm:top-[70%] top-[75%] lg:w-[45%] sm:w-[55%] w-[70%]" alt="housemodel" srcset="" />
                <div className="w-[80%] flex items-center justify-between py-3 ">
                    <div className="flex items-center">
                        <img src={Logo} alt="logo" srcset="" />
                    </div>
                    <div className="flex">
                    <ul className="list-none list1 lg:flex hidden flex justify-between items-center text-[14px]">
                            <li className="ml-4"><a href="#home" >HOME</a></li>
                            <li className="ml-4"><a href="#whyus">WHY US</a></li>
                            <li className="ml-4"><a href="#collection">COLLECTION</a></li>
                            <li className="ml-4"><a href="#benefit">BENEFITS</a></li>
                            <li className="ml-4"><a href="#roadmap">ROADMAP</a></li>
                            <li className="ml-4"><a href="#team">TEAM</a></li>
                            <li className="ml-4"><a href="#faq">FAQ</a></li>
                        </ul>
                        <ul className="list-none lg:flex hidden list-social flex justify-between items-center text-[14px] z-50">
                        <li className="ml-20 w-8 h-8 rounded-full flex items-center justify-center"><a href="#twitter"><FaTwitter className="text-xl"/></a></li>
                            <li className="ml-2 w-8 h-8 rounded-full flex items-center justify-center"><a href="#decord"><img src={DecordIcon} className="w-[20px] h-[14px]" alt=""/></a></li>
                            <li className="ml-2 w-8 h-8 rounded-full flex items-center justify-center"><a href="#insta"><FaInstagram className="text-xl"/></a></li>
                        </ul>
                        <FaBars className="text-white lg:hidden flex" onClick={handleOpen}/>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                <h1 className="text-white md:text-[52px] sm:text-[40px] text-[24px] font-black sm:mt-40 mt-20 text-center">Buy/Sell Own NFT Land <br/> <span className="text-[#FFFA7E]">In MetaEstate</span></h1>
                <p className="text-[14px] text-white text-center md:px-5 px-1 mt-6 max-w-[80%]">The MetaEstate is a leading virtual real estate company offering exposure to this burgeoning industry via the Metaverses.</p>
                </div>
        </div>
        </div>
        )}
        {check===1 &&(
            <div className='absolute w-[100%] z-50 top-0 left-0 overflow-hidden bg-dark' style={{height:"100vh"}}>
                    <div className="flex justify-between items-center px-8 py-4">
                    <div className="flex items-center">
                        <img src={Logo} alt="logo" srcset="" />
                    </div>
                    <AiFillCloseCircle className="text-white text-[32px]" onClick={handleClose}/>
                    </div>
                    <ul className="mt-4 px-5">
                  <li className="flex items-center border-b border-gray-400 text-white pb-3" onClick={handleClick}>
                    <a href="#home" className="text-sm font-bold">
                        HOME
                    </a>
                  </li>
                  <li className="flex items-center border-b border-gray-400 text-white pb-3 mt-3" onClick={handleClick}>
                    <a href="#whyus" className="text-sm font-bold navlink">
                        WHY US
                    </a>
                  </li>
                  <li className="flex items-center border-b border-gray-400 text-white pb-3 mt-3"  onClick={handleClick}>
                    <a href="#collection" className="text-sm font-bold navlink">
                        COLLECTION
                    </a>
                  </li>
                  <li className="flex items-center border-b border-gray-400 text-white pb-3 mt-3"  onClick={handleClick}>
                    <a href="#benefit" className="text-sm font-bold navlink">
                    BENEFITS
                    </a>
                  </li>
                  <li className="flex items-center border-b border-gray-400 text-white pb-3 mt-3"  onClick={handleClick}>
                    <a href="#roadmap" className="text-sm font-bold navlink">
                    ROADMAP
                    </a>
                  </li>
                  <li className="flex items-center border-b border-gray-400 text-white pb-3 mt-3"  onClick={handleClick}>
                    <a href="#team1" className="text-sm font-bold navlink md:flex hidden">
                    TEAM
                    </a>
                    <a href="#team2" className="text-sm font-bold navlink md:hidden flex">
                    TEAM
                    </a>
                  </li>
                  <li className="flex items-center border-b border-gray-400 text-white pb-3 mt-3"  onClick={handleClick}>
                    <a href="#faq" className="text-sm font-bold navlink">
                    FAQ
                    </a>
                  </li>
                  <li className="border-b border-gray-400 text-white pb-3 mt-3">
                  <div className="flex">

<div className="text-black w-8 h-8 rounded-full bg-white flex items-center justify-center"><a href="#insta"><FaInstagram className="text-xl"/></a></div>

    <div className="ml-4 text-black w-8 h-8 rounded-full bg-[#FFFA7E] flex items-center justify-center"><a href="#twitter"><FaTwitter className="text-xl"/></a></div>

    <div className="ml-4 text-black w-8 h-8 rounded-full bg-white flex items-center justify-center"><a href="#decord"><img src={DecordIcon} alt=""/></a></div>
</div>
                  </li>
              </ul>
            </div>
        )}
        </div>
    );
}

export default Navbar;
