// import React from 'react'
// import Backend from './Backend'
// import BackSkill from './BackSkill'
// import Skill from './Skill'
// import Skills from './Frontend'

// export default function Stack({ id, stack, stackIcon}) {

//   // console.log(stack);
//   const [toggle, setToggle] = React.useState(true)


//   const handleToggle = () =>{
//     setToggle(!toggle)
//   }

//   // const All = Skills.map(skill => {
//   //   return(
//   //     <Skill 
//   //       key={skill.id}
//   //       {...skill}
//   //     />
//   //   )
//   // })


  
//   // const AllBackend = Backend.map(skill => {
//   //   return(
//   //     <BackSkill 
//   //       key={skill.id}
//   //       {...skill}
//   //     />
//   //   )
//   // })

//   return (
//     <div className="frontend">
//         <div className="skill-header">
//           <div className="stack">
//             <i className={stackIcon}></i>
//             <h3>{stack}</h3>
//           </div>
//           <i className={toggle ? "uil uil-angle-down rotate" : "uil uil-angle-down"} onClick={()=>handleToggle("backend")}></i>
//         </div>
//         {toggle && <div className="each">
//         </div>}
//     </div>
//   )
// }
