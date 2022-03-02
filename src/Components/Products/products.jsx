import React from 'react'
import Map from '../../assets/images/Map.png'
import Img1 from '../../assets/images/img.png'
import Img2 from '../../assets/images/img-1.png'
import Img3 from '../../assets/images/img-2.png'
import Img4 from '../../assets/images/img-3.png'
import Img5 from '../../assets/images/img-4.png'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'

function Products() {
    let i = 0
    let x=0
    let m=0
    
    function nextf() {
        var div=document.querySelector(".slider").style
        if (i === 750) { i = 750 }
        else { i += 250 }
        div.marginLeft=`-${i}px`
        div.transition="2s"
    }

    function pref() {

        var div=document.querySelector(".slider").style
        if (i === -250) { i = 0 }
        else { i -= 250 }
        div.marginLeft=`-${i}px`
        div.transition="2s"
    }
    function nextp() {
        var div=document.querySelector(".slider1").style
        if (x === 105) { x = 0 }
        else { x += 35 }
        div.marginLeft=`-${x}%`
        div.transition="2s"
    }

    function prep() {

        var div=document.querySelector(".slider1").style
        if (x === -35) { x = 105 }
        else { x -= 35 }
        div.marginLeft=`-${x}px`
        div.transition="2s"
    }

    function nextm() {
        var div=document.querySelector(".slider2").style
        if (m === 500) { m = 0 }
        else { m += 125 }
        div.marginLeft=`-${m}%`
        div.transition="2s"
    }

    function prem() {

        var div=document.querySelector(".slider2").style
        if (m === -125) { m = 500 }
        else { m -= 125 }
        div.marginLeft=`-${m}%`
        div.transition="2s"
    }
    return (
        <>
        <div className="flex justify-center mt-10">
            <div className="rounded-t-full product flex flex-col items-center text-white text-center">
                <h1 className="lg:text-[40px] md:text-[34px] sm:text-[28px] text-[24px] font-black mt-20">WELCOME TO <span className="text-[#FFFA7E]">METAESTATE</span></h1>
                <p className="mt-3 w-[58%]">MetaEstate mainly invests in the Decentraland, Sandbox, and Cryptovoxles, with the number of cumulative associated parcels exceeding 500 and the amount of cumulative associated investments exceeding RMB30 million.</p>
                <div className="lg:w-[1025px] md:w-[800px] sm-[575px] w-[260px] mt-14 overflow-hidden">
                    <div className='flex w-[1025px] gap-5 slider' id="collection">
                    <div className="w-[240px] h-[340px] slide" style={{background:"rgba(255,255,255,.12)"}}>
                        <div className='flex flex-col w-[240px] h-[340px]'>
                        <img src={Map} alt="" className="w-[100%] h-[65%]" srcset="" />
                        <div className="p-4 text-white flex items-start flex-col">
                        <h1 className="text-[12px] font-medium">MetaEstate</h1>
                        <h1 className="text-[22px] font-black">LAND #16061998</h1>
                        <button className="mt-3 w-[124px] h-[48px] text-black bg-[#FFFA7E] text-[16px] font-black" style={{border:"none",outline:"none",borderRadius:"50px"}}>BUY NOW</button>
                        </div>
                        </div>
                    </div>
                    <div className="w-[240px] h-[340px]" style={{background:"rgba(255,255,255,.12)"}}>
                        <div className='flex flex-col w-[240px] h-[340px]'>
                        <img src={Map} alt="" className="w-[100%] h-[65%]" srcset="" />
                        <div className="p-4 text-white flex items-start flex-col">
                        <h1 className="text-[12px] font-medium">MetaEstate1</h1>
                        <h1 className="text-[22px] font-black">LAND #16061998</h1>
                        <button className="mt-3 w-[124px] h-[48px] text-black bg-[#FFFA7E] text-[16px] font-black" style={{border:"none",outline:"none",borderRadius:"50px"}}>BUY NOW</button>
                        </div>
                        </div>
                    </div>
                    <div className="w-[240px] h-[340px]" style={{background:"rgba(255,255,255,.12)"}}>
                        <div className='flex flex-col w-[240px] h-[340px]'>
                        <img src={Map} alt="" className="w-[100%] h-[65%]" srcset="" />
                        <div className="p-4 text-white flex items-start flex-col">
                        <h1 className="text-[12px] font-medium">MetaEstate</h1>
                        <h1 className="text-[22px] font-black">LAND #16061998</h1>
                        <button className="mt-3 w-[124px] h-[48px] text-black bg-[#FFFA7E] text-[16px] font-black" style={{border:"none",outline:"none",borderRadius:"50px"}}>BUY NOW</button>
                        </div>
                        </div>
                    </div>
                    <div className="w-[240px] h-[340px]" style={{background:"rgba(255,255,255,.12)"}}>
                        <div className='flex flex-col w-[240px] h-[340px]'>
                        <img src={Map} alt="" className="w-[100%] h-[65%]" srcset="" />
                        <div className="p-4 text-white flex items-start flex-col">
                        <h1 className="text-[12px] font-medium">MetaEstate</h1>
                        <h1 className="text-[22px] font-black">LAND #16061998</h1>
                        <button className="mt-3 w-[124px] h-[48px] text-black bg-[#FFFA7E] text-[16px] font-black" style={{border:"none",outline:"none",borderRadius:"50px"}}>BUY NOW</button>
                        </div>
                        </div>
                    </div>
                    <div className="w-[240px] h-[340px]" style={{background:"rgba(255,255,255,.12)"}}>
                        <div className='flex flex-col w-[240px] h-[340px]'>
                        <img src={Map} alt="" className="w-[100%] h-[65%]" srcset="" />
                        <div className="p-4 text-white flex items-start flex-col">
                        <h1 className="text-[12px] font-medium">MetaEstate</h1>
                        <h1 className="text-[22px] font-black">LAND #16061998</h1>
                        <button className="mt-3 w-[124px] h-[48px] text-black bg-[#FFFA7E] text-[16px] font-black" style={{border:"none",outline:"none",borderRadius:"50px"}}>BUY NOW</button>
                        </div>
                        </div>
                    </div>
                    <div className="w-[240px] h-[340px]" style={{background:"rgba(255,255,255,.12)"}}>
                        <div className='flex flex-col w-[240px] h-[340px]'>
                        <img src={Map} alt="" className="w-[100%] h-[65%]" srcset="" />
                        <div className="p-4 text-white flex items-start flex-col">
                        <h1 className="text-[12px] font-medium">MetaEstate</h1>
                        <h1 className="text-[22px] font-black">LAND #16061998</h1>
                        <button className="mt-3 w-[124px] h-[48px] text-black bg-[#FFFA7E] text-[16px] font-black" style={{border:"none",outline:"none",borderRadius:"50px"}}>BUY NOW</button>
                        </div>
                        </div>
                    </div>
                    <div className="w-[240px] h-[340px]" style={{background:"rgba(255,255,255,.12)"}}>
                        <div className='flex flex-col w-[240px] h-[340px]'>
                        <img src={Map} alt="" className="w-[100%] h-[65%]" srcset="" />
                        <div className="p-4 text-white flex items-start flex-col">
                        <h1 className="text-[12px] font-medium">MetaEstate</h1>
                        <h1 className="text-[22px] font-black">LAND #16061998</h1>
                        <button className="mt-3 w-[124px] h-[48px] text-black bg-[#FFFA7E] text-[16px] font-black" style={{border:"none",outline:"none",borderRadius:"50px"}}>BUY NOW</button>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='flex gap-10 mt-5'>
                    <button onClick={pref} className="p-2 rounded-full" style={{outline:"none",border:"1px solid white"}}><AiOutlineArrowLeft/></button>
                    <button onClick={nextf} className="p-2 rounded-full" style={{outline:"none",border:"1px solid white"}}><AiOutlineArrowRight/></button>
                    </div>
            </div>
        </div>
        <div className="flex justify-center" id="whyus">
        <div className="w-[100%]  rounded-b-full bg-black flex flex-col items-center text-white text-center relative">
        <h1 className="lg:text-[60px] md:text-[52px] sm:text-[40px] text-[24px] font-black mt-20">TOKEN <span className="text-[#FFFA7E]">FUNDRAISING</span></h1>
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-col gap-x-8">
            <div className="px-3 py-5 rounded-lg flex flex-col items-start" style={{background:"rgba(255,255,255,.12)"}}>
                        <h1 className="text-white text-[24px] font-black">Angel Round
(IDR 2,5B)</h1>
                        <ul className="text-white mt-4 list pl-5 flex flex-col items-start">
                            <li className="mt-2">25 million $MetaEstate</li>
                            <li className="mt-2">2,5% from total supply</li>
                            <li className="mt-2">6 months vesting period</li>
                            <li className="mt-2">IDR 100</li>
                        </ul>
        </div>
        <div className="px-3 py-5 md:mt-0 mt-8 rounded-lg flex flex-col items-start" style={{background:"rgba(255,255,255,.12)"}}>
                        <h1 className="text-white text-[24px] font-black">Seed Round
                        (IDR 10B)</h1>
                        <ul className="text-white mt-4 list pl-5 flex flex-col items-start">
                            <li className="mt-2">50 million $MetaEstate</li>
                            <li className="mt-2">5% from total supply</li>
                            <li className="mt-2">3 months vesting period</li>
                            <li className="mt-2">IDR 200</li>
                        </ul>
        </div>
        <div className="px-3 py-5 lg:mt-0 mt-8 rounded-lg flex flex-col items-start" style={{background:"rgba(255,255,255,.12)"}}>
                        <h1 className="text-white text-[24px] font-black">Public Sale
(IDR 50B)</h1>
                        <ul className="text-white mt-4 list pl-5 flex flex-col items-start">
                            <li className="mt-2">100 million $MetaEstate</li>
                            <li className="mt-2">10% from total supply</li>
                            <li className="mt-2">No vesting period</li>
                            <li className="mt-2">IDR 500</li>
                        </ul>
        </div>
        </div>
        <h1 className="lg:text-[60px] md:text-[52px] sm:text-[40px] text-[24px] font-black mt-20">METAESTATE <span className="text-[#FFFA7E]">TEAM</span></h1>
        <div className="mt-10 w-[100%] h-[300px]  mt-14 overflow-hidden lg:flex hidden" id="team">
            <div className="relative w-[20%]">
            <img src={Img1} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">Rodrigo</h1>
                        <h1 className="text-[22px] font-black">Pinkinsidee</h1>
            </div>
            </div>
            <div className="relative w-[20%]">
            <img src={Img2} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">Mer</h1>
                        <h1 className="text-[22px] font-black">OtavioSnuts</h1>
            </div>
            </div>
            <div className="relative w-[20%]">
            <img src={Img3} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">Acepheres</h1>
                        <h1 className="text-[22px] font-black">Luiz Feres</h1>
            </div>
            </div>
            <div className="relative w-[20%]">
            <img src={Img4} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">RONALDO</h1>
                        <h1 className="text-[22px] font-black">Creative_Eye</h1>
            </div>
            </div>
            <div className="relative w-[20%]">
            <img src={Img5} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">CHRISTIAN</h1>
                        <h1 className="text-[22px] font-black">Insideeride</h1>
            </div>
            </div>
        </div>


                    <div className="lg:hidden md:flex flex-col items-center hidden" id="team">
        <div className="lg:w-[1025px] md:w-[800px] sm-[575px] w-[260px] mt-14 overflow-hidden">
                    <div className='flex w-[1025px] gap-5 slider1'>
                    <div className="w-[300px] h-[340px] slide1" style={{background:"rgba(255,255,255,.12)"}}>
                    <div className="relative w-[300px] h-[100%]">
            <img src={Img1} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">Rodrigo</h1>
                        <h1 className="text-[22px] font-black">Pinkinsidee</h1>
            </div>
            </div>
                    </div>
                    <div className="w-[300px] h-[340px]" style={{background:"rgba(255,255,255,.12)"}}>
                    <div className="relative w-[300px] h-[100%]">
            <img src={Img2} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">Rodrigo</h1>
                        <h1 className="text-[22px] font-black">Pinkinsidee</h1>
            </div>
            </div>
                    </div>
                    <div className="w-[300px] h-[340px]" style={{background:"rgba(255,255,255,.12)"}}>
                    <div className="relative h-[100%] w-[300px]">
            <img src={Img3} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">Rodrigo</h1>
                        <h1 className="text-[22px] font-black">Pinkinsidee</h1>
            </div>
            </div>
                    </div>
                    <div className="w-[300px] h-[340px]" style={{background:"rgba(255,255,255,.12)"}}>
                    <div className="relative h-[100%] w-[300px]">
            <img src={Img4} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">Rodrigo</h1>
                        <h1 className="text-[22px] font-black">Pinkinsidee</h1>
            </div>
            </div>
                    </div>
                    <div className="w-[300px] h-[340px]" style={{background:"rgba(255,255,255,.12)"}}>
                    <div className="relative h-[100%] w-[300px]">
            <img src={Img5} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">Rodrigo</h1>
                        <h1 className="text-[22px] font-black">Pinkinsidee</h1>
            </div>
            </div>
                    </div>
                   
                </div>
                </div>
                <div className='flex gap-10 mt-5'>
                    <button onClick={prep} className="p-2 rounded-full" style={{outline:"none",border:"1px solid white"}}><AiOutlineArrowLeft/></button>
                    <button onClick={nextp} className="p-2 rounded-full" style={{outline:"none",border:"1px solid white"}}><AiOutlineArrowRight/></button>
                    </div>
                    </div>

                    <div className="md:hidden flex flex-col items-center" id="team">
        <div className="lg:w-[1025px] md:w-[800px] sm-[575px] w-[260px] mt-14 overflow-hidden">
                    <div className='flex w-[1025px] gap-5 slider2'>
                    <div className="w-[300px] h-[340px] slide1" style={{background:"rgba(255,255,255,.12)"}}>
                    <div className="relative w-[300px] h-[100%]">
            <img src={Img1} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">Rodrigo</h1>
                        <h1 className="text-[22px] font-black">Pinkinsidee</h1>
            </div>
            </div>
                    </div>
                    <div className="w-[300px] h-[340px]" style={{background:"rgba(255,255,255,.12)"}}>
                    <div className="relative w-[300px] h-[100%]">
            <img src={Img2} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">Rodrigo</h1>
                        <h1 className="text-[22px] font-black">Pinkinsidee</h1>
            </div>
            </div>
                    </div>
                    <div className="w-[300px] h-[340px]" style={{background:"rgba(255,255,255,.12)"}}>
                    <div className="relative h-[100%] w-[300px]">
            <img src={Img3} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">Rodrigo</h1>
                        <h1 className="text-[22px] font-black">Pinkinsidee</h1>
            </div>
            </div>
                    </div>
                    <div className="w-[300px] h-[340px]" style={{background:"rgba(255,255,255,.12)"}}>
                    <div className="relative h-[100%] w-[300px]">
            <img src={Img4} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">Rodrigo</h1>
                        <h1 className="text-[22px] font-black">Pinkinsidee</h1>
            </div>
            </div>
                    </div>
                    <div className="w-[300px] h-[340px]" style={{background:"rgba(255,255,255,.12)"}}>
                    <div className="relative h-[100%] w-[300px]">
            <img src={Img5} className="h-[100%] w-[300px]" alt="" srcset="" />
            <div className="absolute bottom-0 left-0 h-[60px] w-[100%] text-white flex flex-col items-start px-4 py-2" style={{backgroundColor:"rgba(0,0,0,.7)"}}>
                        <h1 className="text-[12px] font-medium">Rodrigo</h1>
                        <h1 className="text-[22px] font-black">Pinkinsidee</h1>
            </div>
            </div>
                    </div>
                   
                </div>
                </div>
                <div className='flex gap-10 mt-5'>
                    <button onClick={prem} className="p-2 rounded-full" style={{outline:"none",border:"1px solid white"}}><AiOutlineArrowLeft/></button>
                    <button onClick={nextm} className="p-2 rounded-full" style={{outline:"none",border:"1px solid white"}}><AiOutlineArrowRight/></button>
                    </div>
                    </div>
        </div>
        </div>
        </>
    )
}

export default Products
