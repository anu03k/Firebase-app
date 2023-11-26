import React from 'react'
import { FaUser, FaUserEdit } from 'react-icons/fa'
import { IoMdTrash } from 'react-icons/io'


// props
const ContactCard = ({contact}) => {
  return <>
   <div key={contact.id} className=' flex bg-powdered_blue justify-between items-center p-2 rounded-lg '>
         
         <div className='flex gap-1'>
            <FaUser className='text-gray text-4xl cursor-pointer'/>
            <div className=' '>

            <h2 className='font-meduim'>{contact.name}</h2>
              <p className='text-sm '>{contact.email}</p>
               </div>
          </div>


           <div className='flex text-3xl '>
           <FaUserEdit className='text-black cursor-pointer' />
           <IoMdTrash className='text-gray cursor-pointer'/>
         

           </div>

           
          </div>
  </>
}

export default ContactCard