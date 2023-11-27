import React from 'react'
import { useState } from 'react';

const useDisclouse = () => {

    const [isOpen,SetOpen]=useState(false);
  // modal open or close
  const onOpen=()=>{
    SetOpen(true);
  };
  const onClose=()=>{
    SetOpen(false);
  }
  return{ onClose  ,onOpen, isOpen}
}

export default useDisclouse