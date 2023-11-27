import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { FaUser, FaUserEdit } from 'react-icons/fa'
import { IoMdTrash } from 'react-icons/io'
import { db } from '../config/firebase';
import UpdateContact from './UpdateContact';
import useDisclouse from '../hooks/useDisclouse';
import { toast } from "react-toastify";

// props
const ContactCard = ({contact}) => {
  const {isOpen, onClose , onOpen}=useDisclouse();
  // modal open or close
  

    // delete contact
    const deleteContact= async (id)=>{
      try{
        await deleteDoc(doc(db, "contacts" , id));
        toast.success("Contact Deleted Successfully");
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
           <FaUserEdit onClick={onOpen} className='text-black cursor-pointer' />
           <IoMdTrash className='text-gray cursor-pointer'   onClick={()=> deleteContact(contact.id)}/>
         

           </div>

           
          </div>
          <UpdateContact isOpen={isOpen} onClose={onClose} contact={contact} isEdit />
  </>
}

export default ContactCard