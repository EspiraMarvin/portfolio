import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
     snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200">
        <motion.img 
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="https://demofree.sirv.com/nope-not-here.jpg"
            className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
             alt=""
         />

         <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">CEO OF TBAG</h4>
            <p className="font-bold text-2xl mt-1">TBAG</p>
            <div className="flex space-x-2 my-2">
                {/* tech used */}
                {/* tech used */}
                {/* tech used */}
                {/* tech used */}
            </div>
            <p className="uppercase py-5 text-gray-300"> Started work... - End...</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary points Summary points Summary points Summary points</li>
                <li>Summary points Summary points Summary points Summary points</li>
                <li>Summary points Summary points Summary points Summary points</li>
                <li>Summary points Summary points Summary points Summary points</li>
                <li>Summary points Summary points Summary points Summary points</li>
            </ul>
         </div>
    </article>
  )
}