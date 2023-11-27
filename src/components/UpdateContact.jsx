import React from 'react';
import Modal from './Modal';
import { Field, Form, Formik } from 'formik';
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import {db} from "../config/firebase"
import { toast } from "react-toastify";



const UpdateContact = ({ isOpen, onClose, isEdit, contact }) => {



  
   const addContact = async (contact)=>{
    try{
      const ContactRef = collection(db, "contacts" );
      await addDoc(ContactRef , contact)
      toast.success("Contact Added Successfully");

      onClose();
    }catch (error){
      console.log(error)
    }
   };

  //  update contact 
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };







  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen}>
        <Formik
          initialValues={isEdit ? 
            { name: contact.name, email:contact.email } :
            
            { name: '', email:" " }} 
          // object

          onSubmit={
            
            (values) =>{ console.log(values)

              isEdit? updateContact(values, contact.id) :addContact(values);
              
              
              // name:values.name 

              
            }
          }
        >
          <Form>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name">Name</label>
              <Field name="name"  className=" h-10 border "/>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email">Email</label>
              <Field name="email"  type="email"  className=" h-10 border "/>
            </div>

            <div>
              <button type="submit" className='bg-dark px-3 py-1.5 border mt-2'   >  {isEdit ? "Update" : "Add"} Contact</button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export default UpdateContact;
