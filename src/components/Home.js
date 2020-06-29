import React from 'react';
import { Link } from 'react-router-dom';
import  {motion} from 'framer-motion';
import Loader from './Loader';


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

const HomeVariant = {
  hidden:{
    opacity: 0
  },
  visible:{
    opacity: 1,
    transition:{delay:1.5, duration:1.5}
  },
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }
}


const Home = () => {
  return (
    <motion.div className="container home"
        variants={HomeVariant}
        initial='hidden'
        animate="visible"
        exit="exit"
    >
      
      <h2> 
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariant}
          whileHover='hover'
          animate='visible'
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
      <Loader />
    </motion.div>
  )
}

export default Home;