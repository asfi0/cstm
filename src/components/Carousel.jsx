import React, { useContext, useEffect } from 'react'
import { DataContext, DataProvider } from '../DataContext/DataContext'
import { LogIn } from 'lucide-react';

const Carousel = () => {
 
 try {
  
   const {fetchAllProducts} = useContext(DataContext);
   useEffect(
     ()=>{
       fetchAllProducts()
     },[]
   )
 } catch (error) {
  console.log(error);
  
 }
  return (
    <div>
      Carousel
    </div>
  )
}

export default Carousel
