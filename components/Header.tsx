import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start xl:items-center justify-between max-w-7xl mx-auto z-20 ">
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{ duration: 1.1 }}
        className="flex flex-row items-center"
        >
            {/* social icons */}
            <SocialIcon 
                url="https://twitter.com/marvin_espira" 
                fgColor="gray"
                bgColor="transparent"
                target="_blank"
            />
            <SocialIcon 
                url="https://twitter.com/marvin_espira" 
                fgColor="gray"
                bgColor="transparent"
                target="_blank"
            />
            <SocialIcon 
                url="https://github.com/EspiraMarvin" 
                fgColor="gray"
                bgColor="transparent"
                target="_blank"
            />
           <SocialIcon 
                url="https://www.linkedin.com/in/marvin-espira/" 
                fgColor="gray"
                bgColor="transparent"
                target="_blank"
            />

        </motion.div>

        <motion.div 
         initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center">
            <SocialIcon 
                className="cursor-pointer"
                network="email"
                fgColor="gray"
                bgColor='transparent'
            />
            <p className="uppercase hidden md:inline-flex text-gray-400 text-sm">Get In Touch</p>
        </motion.div>
    </header>
  )
}