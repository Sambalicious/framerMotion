import React from 'react';
import { Link } from 'react-router-dom';
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
      delay:1.5
    }
  },
  exit:{
    x:'-100vh',
    transition:{ease:'easeInOut'}
  }
}


const buttonVariant = {
  hover:{
    ////numbers in the array  represent keyframes. Note: this animation stops at the end of the array
  // scale:[1,1.1,1,1.1,1,1.1,1],
  //for infinity transitions, use yoyo
    scale: 1.1,
    transition:{
      //yoyo: Infinity for never stop animation
      //duration slows down the timing of animation
      duration:0.3,
      yoyo:Infinity
    },
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',

  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="container toppings"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{scale:1.3,originX:0, color:"#f8e112"}}
              transition={{type:'spring', stiffness:300}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariant}
           whileHover='hover'
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;