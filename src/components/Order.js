import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';



const containerVariants={
  hidden:{
    opacity:0,
    x:'100vw'
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      type:'spring',
      //mass property determines the movement
      ///higher mass makes it move slower and vice versa
      mass:0.4,
      ////damping property determines the oscilation, the lower the damping property the higher the oscilation
      damping: 8,
      ///delay the transition before animation begins
      delay:1.5,
      //when property completes the animation before the children component is called
      when: 'beforeChildren',
      ///like the name, its staggers the children, it delay the animation transition too
      staggerChildren: 2
    }
  },
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }
}

const childVariant={
  hidden:{
    opacity:0
  },

  visible:{
    opacity:1
  }
}


const Order = ({ pizza , setShowModal}) => {

  const [showTitle, setShowTitle]= useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true)
    }, 5000)
  }, [setShowModal])

setTimeout(() => {
  setShowTitle(false);
}, 4000);
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
         <h2>Thank you for your order :)</h2>
    
      <motion.p
        variants={childVariant}
      >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={childVariant}
      >
         {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
     
    </motion.div>
  )
}

export default Order;