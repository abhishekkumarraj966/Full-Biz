import React, { useState } from 'react'

const EnquiryForm = () => {
      const [name,setName]=useState('');
      const [email,setEmail]=useState("");
      const [cont,setcont]=useState("");
      const [msg,setMsg]=useState("");
      
      const handleSubmit=(e)=>{
        //call your api here
      }

    return (
        <div className='bg-[#d6763b] pt-[15px] lg:pt-[40px] pb-8' id='contact'>
            <p className='font-bold text-[30px] text-center   text-white '>Enquiry Form</p>
            <div className='w-[80%] h-auto  sm:h-auto lg:h-auto mx-auto mt-[50px]'>
                <div className='bg-[#D4B294] h-[38px] sm:h-[60px] lg:h-[100px]  rounded-t-[16px] rounded-tr-[16px] font-bold text-[12px] sm:text-[16px] lg:text-[24px] flex items-center justify-center text-[#7D3C13]'>GET IN TOUCH</div>
                <div className='h-auto sm:h-auto lg:h-auto bg-[#7D3C13] pb-6 sm:pb-8  lg:pb-10 rounded-b-[16px]'>
                    <div className='w-[80%] mx-auto'>
                        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Type your Name :-' className='w-full pl-[30px] font-light text-[16px] sm:text-[18px] lg:text-[20px] text-white mx-auto h-[34px] outline-none  sm:h-[50px] lg:h-[81px] bg-gradient-to-tl from-[#7D3C13]   mt-[24px] lg:mt-[50px] to-[#be8a5c]' />
                    </div>
                    <div className='w-[80%] mx-auto'>
                        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Type your Email :-' className='w-full pl-[30px] font-light text-[16px] lg:text-[20px]  sm:text-[18px] mx-auto h-[34px] outline-none lg:h-[81px] sm:h-[50px] bg-gradient-to-tl from-[#7D3C13] text-white  mt-[24px] lg:mt-[50px] to-[#be8a5c]' />
                    </div>
                    <div className='w-[80%] mx-auto'>
                        <input type='text' value={cont} onChange={(e)=>setcont(e.target.value)} placeholder='Type Mobile No. :-' className='w-full pl-[30px] font-light text-[16px] lg:text-[20px]  sm:text-[18px] mx-auto h-[34px] outline-none lg:h-[81px] sm:h-[50px] bg-gradient-to-tl from-[#7D3C13] text-white  mt-[24px] lg:mt-[50px] to-[#be8a5c]' />
                    </div>
                    <div className='w-[80%] mx-auto'>
                        <textarea onChange={(e)=>setMsg(e.target.value)} rows={4} placeholder='Any Message for Us :-' className='w-full pl-[30px] font-light text-[16px] lg:text-[20px]  mx-auto  sm:text-[18px] outline-none  bg-gradient-to-tl from-[#7D3C13] text-white  mt-[24px] lg:mt-[50px] to-[#be8a5c]'>{msg}</textarea>
                    </div>
                    <div className='mt-4 lg:mt-7 '>
                        <button className='w-[150px] h-[50px] lg:w-[213px] mx-auto rounded-[5px]  lg:h-[57px] bg-[#D4B294] flex items-center justify-center'>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnquiryForm