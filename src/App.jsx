
import './App.css'
import { CiSearch } from "react-icons/ci"
import { IoIosAddCircle } from "react-icons/io"


import ContactCard from './components/ContactCard'
import UpdateContact from './components/UpdateContact'


import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import {collection ,getDocs} from "firebase/firestore";
import {db} from "./config/firebase"
import useDisclouse from './hooks/useDisclouse'



function App() {

  const [contacts,setContacts] =useState([]);
  const {isOpen, onClose , onOpen}=useDisclouse();
  
  useEffect(()=>{
    const getContact= async()=>{
      try{

        const contactsRef= collection(db,"contacts"); 
        const contactSnapshot = await getDocs(contactsRef);
        const contactList=contactSnapshot.docs.map((doc)=>
        {
          // mapping document data to a list of objects
          return {
            id:doc.id,
            ...doc.data(),
            // creates array of data
          };

        }); 
          
          console.log(contactList);
          setContacts(contactList);
        }
      
      catch(error){
        console.log(error);
      }     
      // contacts = database name
      
    };
    getContact();
  },[]); 
  // Empty dependency array means this effect runs once when the component mounts



  return(

  <>
  <Navbar  />
  <div className='flex ' >

      <div className='relative flex items-center'>
         <CiSearch className= 'ml-1 text-white text-3xl absolute' />
      <input type="text"
        placeholder='Search Contact'
      className='bg-transparent border border-white rounded-md h-[40px] flex-grow text-white pl-9'/>
       </div>
  
       
        <IoIosAddCircle  onClick={onOpen}  className='text-5xl text-white gap-2 cursor-pointer' />


        
 
    </div> 
    <div className='mt-4 flex gap-4 flex-col'>
        {
        // here this contact is of setcontact state
        contacts.map(contact=>(
          // passing props to contact card
          <ContactCard key={contact.id} contact={contact} /> 
        )) 



      }
        </div>  
       <UpdateContact onClose={onClose} isOpen={isOpen}></UpdateContact>
        

    </>

  )
}

export default App
