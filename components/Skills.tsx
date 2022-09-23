import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'
import { Skill as SkillType } from '../typings'

type Props = {
  skills: SkillType[]
}

export default function Skills({ skills }: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
     className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen  justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>

        <h3 className="absolute top-28 uppercase md:tracking-[3px] text-gray-500 text-sm">Hover over a skill for current proficiency</h3>

        <div className="grid grid-cols-4 gap-5 pt-16 lg:gap-8 md:pt-0 xl:pt-10 md:p-1 md:grid-cols-4 xl:grid-cols-5">
          { skills.slice(0, skills.length/2)?.map(skill => (
            <Skill key={skill._id} skill={skill} />
          ))}

          { skills.slice(skills.length/2, skills.length)?.map(skill => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))} 
        </div>

    </motion.div>
  )
}