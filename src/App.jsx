
import './App.css'
import { CiSearch } from "react-icons/ci"
import { IoIosAddCircle } from "react-icons/io"
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import {collection ,getDocs} from "firebase/firestore";
import {db} from "./config/firebase"


function App() {

  const [contacts,setContacts] =useState([]);
  
  useEffect(()=>{
    const getContact= async()=>{
      try{

        const contactsRef= collection(db,"contacts"); 
        const contactSnapshot = await getDocs(contactsRef);
        const contactList=contactSnapshot.docs.map((doc)=>
          doc.data());
          console.log(contactList);
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
  <Navbar />
  <div className='flex'>

  <div className='relative flex items-center'>
    <CiSearch className= 'ml-1 text-white text-3xl absolute' />
    <input type="text"
    placeholder='Search Contact'
      className='bg-transparent border border-white rounded-md h-[40px] flex-grow text-white pl-9'/>
  </div>
  
    <IoIosAddCircle className='text-5xl text-white gap-2 cursor-pointer' />
 
  </div>
    </>

  )
}

export default App
