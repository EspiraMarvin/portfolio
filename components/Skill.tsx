import React from 'react'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    skill: SkillType,
    directionLeft?: boolean
}

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="relative flex cursor-pointer group">
        <motion.img 
         initial={{
            x: directionLeft ? -20 : 20,
            opacity: 0
         }}
         transition={{ duration: 1 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         src={urlFor(skill?.image).url()}
         className="object-contain w-16 h-16 transition duration-300 ease-in-out border border-gray-500 rounded-full md:w-24 md:h-24 filter group-hover:grayscale"
        />
        <div className="absolute z-20 w-16 h-16 transition duration-300 ease-in-out rounded-full opacity-0 md:w-24 md:h-24 group-hover:opacity-80 group-hover:bg-white">
            <div className="flex items-center justify-center h-full">
                <p className="font-bold text-black opacity-100 md:text-3xl">{skill?.progress}%</p>
            </div>
            <div className="z-50 w-full pt-2 text-center text-white bg-blue-900">{skill?.title}</div>
        </div>
    </div>
  )
}