import React from 'react'
import Arrow from '../../assets/images/arrow.png'

function Roadmap() {
    return (
        <div className="faqs pl-12" id="roadmap">
        <div className="flex flex-col items-center text-white relative mt-32">
        <h1 className="lg:text-[60px] md:text-[52px] sm:text-[48px] text-[40px] font-black mt-20">OUR <span className="text-[#FFFA7E]">ROADMAP</span></h1>
        <div className="w-full lg:block flex flex-col items-center justify-center pl-2 py-10 ">
            <div className="flex md:items-center items-start lg:ml-[5%]">
                <div className="w-[80px] h-[80px] border-2 border-[#D8FB50] rounded-full flex flex-col items-center justify-center text-[18px] font-black">
                    <h1>Q1,</h1>
                    <h1>2020</h1>
                </div>
                <div className="sm:w-[400px] w-[270px] rounded-lg py-4 px-3 ml-2 bg-[#292929]">
                    <h1 className="text-[18px] font-black">CORE TEAM</h1>
                    <p className="mt-3 text-[14px]">Build a solid team with leading artists, product, UX design and development.<br/>Partner with the Sloth Conservation Foundation.</p>
                </div>
            </div>
            <div className="flex items-center lg:ml-[8%]">
                <img src={Arrow} className="mt-[-5%] w-[80px] h-[120px] lg:flex hidden" alt="" srcset="" />
                <div className="flex md:items-center items-start mt-10">
                <div className="w-[80px] h-[80px] border-2 border-[#D8FB50] rounded-full flex flex-col items-center justify-center text-[18px] font-black ml-2">
                    <h1>Q2,</h1>
                    <h1>2020</h1>
                </div>
                <div className="sm:w-[400px] w-[270px] rounded-lg py-4 px-3 ml-2 bg-[#292929]">
                    <h1 className="text-[18px] font-black">COMMUNITY</h1>
                    <p className="mt-3 text-[14px]">Build a solid community of like-minded people who are interested in both NFTs and supporting good causes.<br/>
                    Advertising and marketing campaigns.</p>
                </div>
                </div>
            </div>
            <div className="flex items-center lg:ml-[17%]">
                <img src={Arrow} className="mt-[-5%] w-[80px] h-[120px] lg:flex hidden" alt="" srcset="" />
                <div className="flex md:items-center items-start mt-10">
                <div className="w-[80px] h-[80px] border-2 border-[#D8FB50] rounded-full flex flex-col items-center justify-center text-[18px] font-black ml-2">
                    <h1>Q1,</h1>
                    <h1>2020</h1>
                </div>
                <div className="sm:w-[400px] w-[270px] rounded-lg py-4 px-3 ml-2 bg-[#292929]">
                    <h1 className="text-[18px] font-black">AVATAR BUILDER BETA</h1>
                    <p className="mt-3 text-[14px]">Only accessible by Jungle Pass holders<br/>
                    555 Sloth NFTs, fully customizable and unique<br/>
                    1 entry for grand prize (Costa Rica holiday giveaway).</p>
                </div>
                </div>
            </div>
            <div className="flex items-center lg:ml-[25%]">
                <img src={Arrow} className="mt-[-5%] w-[80px] h-[120px] lg:flex hidden" alt="" srcset="" />
                <div className="flex md:items-center items-start mt-10">
                <div className="w-[80px] h-[80px] border-2 border-[#D8FB50] rounded-full flex flex-col items-center justify-center text-[18px] font-black ml-2">
                    <h1>Q2,</h1>
                    <h1>2020</h1>
                </div>
                <div className="sm:w-[400px] w-[270px] rounded-lg py-4 px-3 ml-2 bg-[#292929]">
                    <h1 className="text-[18px] font-black">DONATION & GIVEAWAYS</h1>
                    <p className="mt-3 text-[14px]">Donate 20% of all Sloth NFT sales to SloCo <br/>
                    FREE Costa Rica holiday for 4 nights. Includes round trip flights, and accommodation, for 2 people.</p>
                </div>
                </div>
            </div>
            <div className="flex items-center lg:ml-[34.5%]">
                <img src={Arrow} className="mt-[-5%] w-[80px] h-[120px] lg:flex hidden" alt="" srcset="" />
                <div className="flex md:items-center items-start mt-10">
                <div className="w-[80px] h-[80px] border-2 border-[#D8FB50] rounded-full flex flex-col items-center justify-center text-[18px] font-black ml-2">
                    <h1>Q2,</h1>
                    <h1>2020</h1>
                </div>
                <div className="sm:w-[400px] w-[270px] rounded-lg py-4 px-3 ml-2 bg-[#292929]">
                    <h1 className="text-[18px] font-black">DONATION & GIVEAWAYS</h1>
                    <p className="mt-3 text-[14px]">Donate 20% of all Sloth NFT sales to SloCo <br/>
                    FREE Costa Rica holiday for 4 nights. Includes round trip flights, and accommodation, for 2 people.</p>
                </div>
                </div>
            </div>
            <div className="flex items-center lg:ml-[44%]">
                <img src={Arrow} className="mt-[-5%] w-[80px] h-[120px] lg:flex hidden" alt="" srcset="" />
                <div className="flex md:items-center items-start mt-10">
                <div className="w-[80px] h-[80px] border-2 border-[#D8FB50] rounded-full flex flex-col items-center justify-center text-[18px] font-black ml-2">
                    <h1>Q2,</h1>
                    <h1>2020</h1>
                </div>
                <div className="sm:w-[400px] w-[270px] rounded-lg py-4 px-3 ml-2 bg-[#292929]">
                    <h1 className="text-[18px] font-black">DONATION & GIVEAWAYS</h1>
                    <p className="mt-3 text-[14px]">Donate 20% of all Sloth NFT sales to SloCo <br/>
                    FREE Costa Rica holiday for 4 nights. Includes round trip flights, and accommodation, for 2 people.</p>
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Roadmap
