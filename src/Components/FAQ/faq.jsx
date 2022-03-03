import React,{useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {GrFormSubtract} from 'react-icons/gr'

function FAQ() {
    const [check,setCheck]=useState(0)
    const [checks,setChecks]=useState(0)
    const [checkss,setCheckss]=useState(0)
    const [checksss,setChecksss]=useState(0)
    const [checkssss,setCheckssss]=useState(0)
    let handleOpen=()=>{
        setCheck(check+1)
        var div=document.querySelector(".faqDiv1").style
        var h1=document.querySelector(".faqQ1").style
        h1.color="#FFFA7E"
        div.border="1px solid #FFFA7E"
    }
    let handleClose=()=>{
        setCheck(check-1)
        var div=document.querySelector(".faqDiv1").style
        var h1=document.querySelector(".faqQ1").style
        h1.color="white"
        div.border="1px solid white"
    }
    let handleOpen1=()=>{
        setChecks(checks+1)
        var div=document.querySelector(".faqDiv2").style
        var h1=document.querySelector(".faqQ2").style
        h1.color="#FFFA7E"
        div.border="1px solid #FFFA7E"
    }
    let handleClose1=()=>{
        setChecks(checks-1)
        var div=document.querySelector(".faqDiv2").style
        var h1=document.querySelector(".faqQ2").style
        h1.color="white"
        div.border="1px solid white"
    }
    let handleOpen2=()=>{
        setCheckss(checkss+1)
        var div=document.querySelector(".faqDiv3").style
        var h1=document.querySelector(".faqQ3").style
        h1.color="#FFFA7E"
        div.border="1px solid #FFFA7E"
    }
    let handleClose2=()=>{
        setCheckss(checkss-1)
        var div=document.querySelector(".faqDiv3").style
        var h1=document.querySelector(".faqQ3").style
        h1.color="white"
        div.border="1px solid white"
    }
    let handleOpen3=()=>{
        setChecksss(checksss+1)
        var div=document.querySelector(".faqDiv4").style
        var h1=document.querySelector(".faqQ4").style
        h1.color="#FFFA7E"
        div.border="1px solid #FFFA7E"
    }
    let handleClose3=()=>{
        setChecksss(checksss-1)
        var div=document.querySelector(".faqDiv4").style
        var h1=document.querySelector(".faqQ4").style
        h1.color="white"
        div.border="1px solid white"
    }
    let handleOpen4=()=>{
        setCheckssss(checkssss+1)
        var div=document.querySelector(".faqDiv5").style
        var h1=document.querySelector(".faqQ5").style
        h1.color="#FFFA7E"
        div.border="1px solid #FFFA7E"
    }
    let handleClose4=()=>{
        setCheckssss(checkssss-1)
        var div=document.querySelector(".faqDiv5").style
        var h1=document.querySelector(".faqQ5").style
        h1.color="white"
        div.border="1px solid white"
    }
    return (
        <div className="w-full overflow-hidden text-white" id="faq">
        <div className="w-full  pb-20 rounded-t-full faq flex lg:flex-row flex-col lg:justify-evenly justify-center
        lg:items-start items-center md:px-32 sm:px-10 px-5">
            <div className="lg:w-[60%] md:w-[80%] sm:w-[90%] w-[100%] flex flex-col lg:items-start items-center ">
        <h1 className="lg:text-[60px] text-center md:text-[52px] sm:text-[40px] text-[32px] font-black mt-20">GENERAL <span className="text-[#FFFA7E]">FAQS</span></h1>
        <p className="md:pr-5 text-center pr-0 mt-4 flex flex-col lg:items-start items-center lg:w-[60%] md:w-[80%] sm:w-[90%] w-[100%]">As a MetaEstate construction service provider,<br className='sm:flex hidden'/> MetaEstate selects renowned Metaverse platforms to participate in parcel transactions, construction, etc.</p>
        <button className="mt-6 w-[124px] h-[48px] btn2 text-[12px] font-black lg:flex items-center justify-center hidden" style={{border:"none",outline:"none",borderRadius:"50px"}}>CONTACT US</button>
        </div>
            <div className='mt-28'>
            <p className='sm:w-[400px] w-[300px] rounded-md faqDiv1 faqDiv'>
            <div className='flex justify-between items-center px-3 py-3'>
                    <h1 className='text-[14px] font-bold faqQ1'>What does NFT Collection Comprise of?</h1>
                {check===0 &&(
                    <div className='w-5 h-5 rounded-full border border-white flex justify-center items-center' onClick={handleOpen}>
                <a class="text-white text-[18px] w-5 h-5 flex justify-center items-center" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <AiOutlinePlus/>
                </a>
                </div>
                )}
                {check===1 &&(
                    <div className='w-5 h-5 rounded-full bg-[#FFFA7E] text-black flex justify-center items-center' onClick={handleClose}>
                <a class="text-[18px] flex justify-center items-center" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <GrFormSubtract/>
                </a>
                    </div>
                )}
                    </div>
                <div class="collapse"  id="collapseExample">
                <div class="card card-body sm:w-[380px] pt-0 pb-3 pr-3 text-[12px] bg-black" style={{background:"transparent"}}>
                To sell your NFTs on a marketplace, you{"’"}ll need to locate them in your collection, click on them and find the “sell” button.
                </div>
                </div>
                </p>

                <p className='sm:w-[400px] w-[300px] rounded-md mt-3 faqDiv faqDiv2 '>
            <div className='flex justify-between items-center px-3 py-3'>
                    <h1 className='text-[14px] font-bold faqQ2'>How to get our NFT?</h1>
                    {checks===0 &&(
                    <div className='w-5 h-5 rounded-full border border-white flex justify-center items-center' onClick={handleOpen1}>
                <a class="text-white text-[18px] w-5 h-5 flex justify-center items-center" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <AiOutlinePlus/>
                </a>
                </div>
                )}
                {checks===1 &&(
                    <div className='w-5 h-5 rounded-full bg-[#FFFA7E] text-black flex justify-center items-center' onClick={handleClose1}>
                <a class="text-[18px] flex justify-center items-center" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <GrFormSubtract/>
                </a>
                    </div>
                )}
                    </div>
                <div class="collapse"  id="collapseExample1">
                <div class="card card-body sm:w-[380px] pt-0 pb-3 pr-3 text-[12px] bg-black" style={{background:"transparent"}}>
                To sell your NFTs on a marketplace, you{"’"}ll need to locate them in your collection, click on them and find the “sell” button.
                </div>
                </div>
                </p>

                <p className='sm:w-[400px] w-[300px]faqDiv rounded-md mt-3 faqDiv faqDiv3'>
            <div className='flex justify-between items-center px-3 py-3'>
                    <h1 className='text-[14px] faqQ3 font-bold'>How much does our NFT cost?</h1>
                    {checkss===0 &&(
                    <div className='w-5 h-5 rounded-full border border-white flex justify-center items-center' onClick={handleOpen2}>
                <a class="text-white text-[18px] w-5 h-5 flex justify-center items-center" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <AiOutlinePlus/>
                </a>
                </div>
                )}
                {checkss===1 &&(
                    <div className='w-5 h-5 rounded-full bg-[#FFFA7E] text-black flex justify-center items-center' onClick={handleClose2}>
                <a class="text-[18px] flex justify-center items-center" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <GrFormSubtract/>
                </a>
                    </div>
                )}
                    </div>
                <div class="collapse"  id="collapseExample2">
                <div class="card card-body sm:w-[380px] pt-0 pb-3 pr-3 text-[12px] bg-black" style={{background:"transparent"}}>
                To sell your NFTs on a marketplace, you{"’"}ll need to locate them in your collection, click on them and find the “sell” button.
                </div>
                </div>
                </p>

                <p className='sm:w-[400px] w-[300px] faqDiv rounded-md mt-3 faqDiv4'>
            <div className='flex justify-between items-center px-3 py-3'>
                    <h1 className='text-[14px] faqQ4 font-bold'>Will you list your NFT on OpenSea?</h1>
                    {checksss===0 &&(
                    <div className='w-5 h-5 rounded-full border border-white flex justify-center items-center' onClick={handleOpen3}>
                <a class="text-white text-[18px] w-5 h-5 flex justify-center items-center" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <AiOutlinePlus/>
                </a>
                </div>
                )}
                {checksss===1 &&(
                    <div className='w-5 h-5 rounded-full bg-[#FFFA7E] text-black flex justify-center items-center' onClick={handleClose3}>
                <a class="text-[18px] flex justify-center items-center" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <GrFormSubtract/>
                </a>
                    </div>
                )}
                    </div>
                <div class="collapse"  id="collapseExample3">
                <div class="card card-body sm:w-[380px] pt-0 pb-3 pr-3 text-[12px] bg-black" style={{background:"transparent"}}>
                To sell your NFTs on a marketplace, you{"’"}ll need to locate them in your collection, click on them and find the “sell” button.
                </div>
                </div>
                </p>

                <p className='sm:w-[400px] w-[300px] faqDiv rounded-md mt-3 faqDiv5'>
            <div className='flex justify-between items-center px-3 py-3'>
                    <h1 className='text-[14px] faqQ5 font-bold'>What is a Rarity NFT?</h1>
                    {checkssss===0 &&(
                    <div className='w-5 h-5 rounded-full border border-white flex justify-center items-center' onClick={handleOpen4}>
                <a class="text-white text-[18px] w-5 h-5 flex justify-center items-center" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <AiOutlinePlus/>
                </a>
                </div>
                )}
                {checkssss===1 &&(
                    <div className='w-5 h-5 rounded-full bg-[#FFFA7E] text-black flex justify-center items-center' onClick={handleClose4}>
               <a class="text-[18px] flex justify-center items-center" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <GrFormSubtract/>
                </a>
                    </div>
                )}
                    </div>
                <div class="collapse"  id="collapseExample4">
                <div class="card card-body sm:w-[380px] pt-0 pb-3 pr-3 text-[12px] bg-black" style={{background:"transparent"}}>
                To sell your NFTs on a marketplace, you{"’"}ll need to locate them in your collection, click on them and find the “sell” button.
                </div>
                </div>
                </p>
            </div>
            <button className="mt-6 w-[124px] h-[48px] text-black bg-[#FFFA7E] text-[12px] font-black lg:hidden flex items-center justify-center" style={{border:"none",outline:"none",borderRadius:"50px"}}>CONTACT US</button>
        </div>
        </div>
        
    )
}

export default FAQ
