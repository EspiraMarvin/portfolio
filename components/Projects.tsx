import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({}: Props) {
    const projects = [1, 2, 3 ,4 ,5]
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
     className="h-screen relative flex flex-col md:flex-row overflow-hidden text-left items-center justify-evenly  max-w-full mx-auto z-0">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
            { projects.map((project, index) => (
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen" key={index}>
                    <motion.img 
                    initial={{
                        y: -300,
                        opacity: 0
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                      src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png" alt=""
                      className="h-80 w-[500px]" 
                    />

                    <div className="space-y-10 px-0 mz:px-10 max-w-6xl">
                    <h4 className="text-3xl md:text-4xl font-semibold text-center">
                        <span className="underline decoration-[#F7AB0A]/50"> 
                        Case Study {index + 1} of {projects.length}
                       </span> {' '}
                       UPS Clone
                    </h4>
                    
                    <p className="text-lg text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam repellendus nobis autem, optio consequuntur temporibus porro atque? Officia inventore, neque optio at quos repellendus, hic aliquam quam architecto sapiente libero fuga illo dignissimos quibusdam! Ipsam, recusandae accusamus. Voluptates inventore, fugit ut ducimus nisi rerum nostrum a. Quaerat, fuga sapiente!</p>

                    </div>
                </div>
            ))}
           
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}