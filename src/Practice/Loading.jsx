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

  return (
    <div style={styles}>
        Loading
        <motion.div
            className='long'
            variants={variant}
            animate="animate"
        ></motion.div>
    </div>
  )
}
