import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
    socials: Social[]
}

export default function Header({socials }: Props) {
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto xl:items-center max-w-7xl ">
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
        className="z-20 flex flex-row items-center"
        >
            {/* social icons */}
            { socials.map((social, i) => (
                <SocialIcon 
                    key={social._id}
                    url={social.url} 
                    fgColor="gray"
                    bgColor="transparent"
                    target="_blank"
                />
            ))}

        </motion.div>

        <Link href="#contact">
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
            className="z-20 flex flex-row items-center cursor-pointer">
                <SocialIcon 
                    network="email"
                    fgColor="gray"
                    bgColor='transparent'
                />
                <p className="hidden text-sm text-gray-400 uppercase md:inline-flex">Get In Touch</p>
            </motion.div>
        </Link>

    </header>
  )
}