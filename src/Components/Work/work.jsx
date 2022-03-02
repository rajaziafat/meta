import React from 'react'
import World from '../../assets/images/world.png'

function work() {
    return (
            <div className="flex flex-col items-center text-white relative" id="benefit">
                <img src={World} className="absolute lg:top-[70%] md:top-[80%] top-[90%] w-[100%] left-0 z-40" alt="" srcset="" />
        <h1 className="lg:text-[60px] md:text-[52px] sm:text-[40px] text-[24px] mt-20" style={{fontWeight:"900"}}>HOW IT <span className="text-[#FFFA7E]">WORKS</span></h1>
        <div className="lg:w-[50%] md:w-[60%] sm:w-[70%] w-[80%] mt-10 flex flex-col items-center ">
        <p className="text-center">As a MetaEstate construction service provider, MetaEstate selects renowned MetaEstate platforms to participate in parcel transactions, construction, etc.</p>

<p className="mt-7 text-center">Currently, MetaEstate mainly invests in the Decentraland, Sandbox, and Cryptovoxles, with the number of cumulative associated parcels exceeding 500 and the amount of cumulative associated investments exceeding RMB30 million.</p>

<p className="mt-7 text-center">MetaEstate has built several regional fund towns, GameFi-based towns, art zones, MKEA furniture cities, etc. in CV, attracting over 30 partners including TRON, CryptoArt, STCloud, etc. Additionally, ME will make buildings on Sandbox and introduce leading companies and international organizations to DCL.</p>

<button className="mt-6 w-[124px] h-[48px] btn text-[12px] font-black flex items-center justify-center z-50" style={{border:"none",outline:"none",borderRadius:"50px"}}>CONTACT US</button>
</div>
        </div>
    )
}

export default work
