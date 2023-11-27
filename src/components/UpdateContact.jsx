import React from 'react';
import Modal from './Modal';
import { Field, Form, Formik } from 'formik';
import { collection, addDoc } from 'firebase/firestore';
import {db} from "../config/firebase"
 
const UpdateContact = ({ isOpen, onClose }) => {
   const addContact = async (contact)=>{
    try{
      const ContactRef = collection(db, "contacts");
      await addDoc(ContactRef , contact)
    }catch (error){
      console.log(error)
    }
   };








  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen}>
        <Formik
          initialValues={{ name: '', email:" " }} 
          // object

          onSubmit={
            
            (values) =>{ console.log(values)
              addContact(values);
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
              <button type="submit" className='bg-dark px-3 py-1.5 border mt-2'  >Add Contact</button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export default UpdateContact;
