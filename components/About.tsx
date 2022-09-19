import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

        <motion.img
        initial={{
            x: -200,
            opacity: 0
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true}}
        src="./marvin.jpeg"
        className="-mb-20 md:mb-0 rounded-full flex-shrink-0 w-56 h-56 object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        />
        
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background</h4>
            <p className="text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga porro ratione cupiditate ad enim nihil quidem cumque amet magnam, 
                dolor vero ab impedit quo, aperiam ducimus iusto assumenda tempore placeat incidunt sed ut sint! Dolorem nulla perspiciatis debitis aliquam labore aspernatur dolore quas quos, temporibus aliquid impedit, ratione animi vero.
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga porro ratione cupiditate ad enim nihil quidem cumque amet magnam, 
                dolor vero ab impedit quo, aperiam ducimus iusto assumenda tempore placeat incidunt sed ut sint! Dolorem nulla perspiciatis debitis aliquam labore aspernatur dolore quas quos, temporibus aliquid impedit, ratione animi vero.
            </p>
        </div>

    </motion.div>
  )
}