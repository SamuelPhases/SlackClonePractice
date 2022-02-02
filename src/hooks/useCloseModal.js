import React from 'react';


export default function closeModal({e,setModal,uniqueClass}) {
    if(e.target.classList.contains(`${uniqueClass}`))setModal(false)
  return ;
}
