import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    const [showLabel, setShowLabel] =  useState(false)
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
     className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory appScrollbar">
            { projects.map((project, index) => (
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44" key={project._id}>
                    <motion.img 
                    initial={{
                        y: -300,
                        opacity: 0
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src={urlFor(project?.image).url()}
                      className="h-80 w-[500px] object-cover" 
                    />

                    <div className="max-w-6xl px-0 space-y-10 md:px-10">
                    <h4 className="text-xl font-semibold text-center md:text-3xl 2xl:text-4xl">
                        <span className="underline decoration-[#F7AB0A]/50 text-base"> 
                        Project {index + 1} of {projects.length}
                       </span> {' '}
                       <a target="_blank" href={project?.linkToBuild}  rel="noopener noreferrer">
                           <span className="text-gray-300 cursor-pointer hover:text-gray-50 hover:underline hover:decoration-white">{ project?.title }</span>
                      </a>
                    </h4>
                    

                    <div className="flex items-center justify-center gap-x-4">
                        {project?.technologies.map(tech => (
                            <div key={tech._id}>
                              <Image
                                key={tech._id}
                                src={urlFor(tech?.image).url()} 
                                width={32}
                                height={32}
                                alt="tech"
                                className={`hover ${ showLabel && 'cursor-pointer'}`}
                             />
                             {showLabel && tech?.title}
                            </div>
                        ))}
                    </div>

                    <p className="text-lg text-center md:text-left">
                        { project?.summary }
                    </p>
                       
                    </div>
                </div>
            ))}
           
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}