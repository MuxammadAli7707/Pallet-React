import React from 'react'
import TableList from './TableList';
import TableMain from './TableMain';

export default function Table(){
  return (
    <>
     <section className='mt-5'>
       <div className='container'>
         <TableList/>

         <TableMain/>

       </div>
     </section>
    
    </>

  )
}