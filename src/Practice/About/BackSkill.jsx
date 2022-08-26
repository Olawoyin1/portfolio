import React from 'react'
import { motion } from 'framer-motion'

const popup = {
  initial : {
    y : 20,
    opacity : 0
  },
  animate : {
    y : 0,
    opacity : 1,
    transition : {
      type : "spring",
      stiffness : 400
    }
  }
}

export default function BackSkill({language, level}) {

  const styles = {
    width: level,
    backgroundImage : " linear-gradient(20deg, #dc6b6b, #845de1)",
    height : "100%",
    borderRadius : "10px"
  }

  return (
    <motion.div
     className='all'
     variants={popup}
    >
        <div className="lang">
            <h3>{language}</h3>
            <p className='raleway'>{level}</p>
        </div>
        <div className="level">
            <div className="roll" style={styles}></div>
        </div>
    </motion.div>
  )
}
