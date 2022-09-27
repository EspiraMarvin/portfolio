import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
import Image from 'next/image'

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg md:items-center  space-y-3 md:space-y-2 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] 
     snap-center bg-[#292929] pl-10 pt-4 pb-10 md:px-10 md:pb-20 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200">
        <motion.img 
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src={urlFor(experience?.companyImage).url()}
            className="object-cover object-center w-16 h-16 rounded-full md:w-20 md:h-20 md:rounded-full"
             alt="company images"
         />

         <div className="px-0 md:px-2">
            <h4 className="text-xl font-light lg:text-3xl">{experience?.jobTitle}</h4>
            <p className="mt-1 text-2xl font-bold">{experience?.company}</p>
            <div className="flex my-2 gap-x-3">
                {/* tech used */}
              {experience.technologies.map(technology => (
                <Image 
                 key={technology._id}
                 src={urlFor(technology?.image).url()}
                 className="object-cover rounded-full"
                 width={26}
                 height={26}
                 alt="skill image"
                />
              ))}
            </div>
            <p className="py-5 text-gray-300 uppercase"> {new Date(experience?.dateStarted).toDateString()} -
             { experience?.isCurrentlyWorkingHere ? "Present" : new Date(experience?.dateEnded).toDateString() }.
             </p>

            <ul className="w-4/5 ml-4 pr-4 space-y-4 scroll-smooth overflow-scroll text-lg list-disc h-96 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#7dd3fc]/80 ">
              {/* summary points */}
              { experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
         </div>
    </article>
  )
}