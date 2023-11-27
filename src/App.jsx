
import './App.css'
import { CiSearch } from "react-icons/ci"
import { IoIosAddCircle } from "react-icons/io"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import ContactCard from './components/ContactCard'
import UpdateContact from './components/UpdateContact'


import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import {collection ,getDocs, onSnapshot} from "firebase/firestore";
import {db} from "./config/firebase"
import useDisclouse from './hooks/useDisclouse'



function App() {

  const [contacts,setContacts] =useState([]);
  const {isOpen, onClose , onOpen}=useDisclouse();
  
  useEffect(()=>{
    const getContact= async()=>{
      try{

        const contactsRef= collection(db,"contacts"); 
        // const contactSnapshot = await getDocs(contactsRef);
          onSnapshot(contactsRef, (snapshot)=>{
            const contactList=snapshot.docs.map((doc)=>
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
          return contactList;
            
          })

      
        }
      
      catch(error){
        console.log(error);
      }     
      // contacts = database name
      
    };
    getContact();
  },[]); 
  // Empty dependency array means this effect runs once when the component mounts
  

  // for search functionality

  
  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      // console.log(filteredContacts);

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };


  return(

  <>
  <div className='mx-auto max-w-[370px] px-4'>

  
  <Navbar  />
  <div className='flex gap-2 ' >

      <div className='relative flex items-center'>
         <CiSearch className= 'ml-1 text-white text-3xl absolute' />
      <input type="text"
      onChange={filterContacts}
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
        <ToastContainer  position='bottom-center'/>
       </div>
    </>

  )
}

export default App
