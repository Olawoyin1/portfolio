import React from 'react'
import { motion } from "framer-motion"

export default function Loading() {
    const styles = {
        minHeight : "100vh",
        display : "flex",
        alignItems : "center",
        justifyContent : "center"
    }

    const variant = {
        animate : {
            x : [5, 40],
            // y : [0 , -30],
            transition : {
               x : {
                yoyo : "Infinity",
                duration : 0.5
            },
            y : {
                yoyo : "Infinity",
                duration : 0.25
               }
            }
           
        }
            
    }

    const newLoad = {
        initial : {
            scale : 0,
            rotate : [0 , 180, 90, 0],
            borderRadius : "50%",
        },
        animate : {
            scale : 1.45 ,
            rotate : [0 , -360],
            borderRadius : "20%",
            transition : {
                yoyo : "Infinity",
                duration : 2,
                type : "spring",
                ease : "easeInOut"
            }
        }
    }

    const three = {
        animate : {
            transition : {
                // when : "beforeChildren",
                staggerChildren : 1
            }
        }
    }


    const toggle = {
        initial : {

        },
        animate : {
            y : [-10, 10],
            transition : {
                yoyo : "Infinity"
                
            }

        }
    }

  return (
    // <div style={styles}>
    //     Loading
    //     <motion.div
    //         className='long'
    //         variants={variant}
    //         animate="animate"
    //     ></motion.div>
    // </div>
    
    <div className="newLoad">

        <motion.div 
            className='rotating'
            variants={newLoad}
            initial="initial"
            animate="animate"
        ></motion.div>

        {/* <motion.div
         className="three"
         variants={three}
         animate="animate"
        >
            
            <motion.div
             className="dot"
             variants={toggle}
             ></motion.div>
            <motion.div
             className="dot"
             variants={toggle}
             ></motion.div>
            <motion.div
             className="dot"
             variants={toggle}
            ></motion.div>
        </motion.div> */}


    </div>
  )
}
