import React from 'react';
import {Link} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';


const backDrop = {
    visible:{
        opacity: 1
    },
    hidden:{
        opacity: 0
    }
}

const modal ={
    hidden:{
        y: '100vh',
        opacity:0
    },
    visible:{
        y:"200px",
        opacity:1,
        transition:{delay:5}
    }
}

const funcModal = (modal) =>{
    return modal
}

const Modal = ({showModal, setShowModal}) => {
    return (
        <div>
            <AnimatePresence exitBeforeEnter onExitComplete={()=>setShowModal(false)}>
                {showModal && (
                    <motion.div className="backdrop"
                        variants={backDrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <motion.div className="modal"
                            variants={funcModal(modal)}
                            initial="hidden"
                            animate="visible"
                        >
                            <p>Want to make another pizza?</p>
                            <Link to="/">
                                <button>Start Again</button>
                            </Link>
                        </motion.div>

                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    )
}

export default Modal
