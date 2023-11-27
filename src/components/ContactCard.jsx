import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { FaUser, FaUserEdit } from 'react-icons/fa'
import { IoMdTrash } from 'react-icons/io'
import { db } from '../config/firebase';

// props
const ContactCard = ({contact}) => {

    // delete contact
    const deleteContact= async (id)=>{
      try{
        await deleteDoc(doc(db, "contacts" , id));

      }catch(error){
        console.log(error)
      }
    }






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
           <IoMdTrash className='text-gray cursor-pointer'   onClick={()=> deleteContact(contact.id)}/>
         

           </div>

           
          </div>
  </>
}

export default ContactCard