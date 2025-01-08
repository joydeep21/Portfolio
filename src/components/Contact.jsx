import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className='w-full h-full  bg-[#0a192f] flex justify-center items-center p-20'>
            <form action="https://getform.io/f/0dNVvpdL" method='POST' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#f18d13e3] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the below form or shoot me an email - joydeepshaw21@gmail.com</p>

                </div>
                <input type="text" placeholder='Name' name='name' className='bg-[#ccdcf6] p-2 outline-none rounded-sm' required />
                <input type="email" placeholder='Email' name='email' className='bg-[#ccdcf6] p-2 my-4 outline-none rounded-sm' required />
                <textarea name="message" className='bg-[#ccdcf6] p-2 outline-none rounded-sm' placeholder='Message' rows="10" required />
                <button className='text-white group border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#ffae4ae3] hover:border-[#ffae4ae3]'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact