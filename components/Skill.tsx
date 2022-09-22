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
            x: directionLeft ? -200 : 200,
            opacity: 0
         }}
         transition={{ duration: 1 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
        src={urlFor(skill?.image).url()}
         className="object-contain w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:h-28 xl:w-28 filter group-hover:grayscale"
        />
        <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-28 xl:h-28">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">{skill?.progress}%</p>
            </div>
        </div>
    </div>
  )
}