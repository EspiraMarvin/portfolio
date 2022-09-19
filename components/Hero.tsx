import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My name is Marvin Espira.",
            "Good in React, Nextjs",
            "Good in Typescript, Javascript",
            "<LovesToCodeMore💻️>",
            "<Funny&LovesCoffee☕️>"      
        ],
        loop: true,
        delaySpeed: 2000
       })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <Image
            src="/marvin.jpeg"  
            className="rounded-full h-32 w-32 object-cover"
            width={130}
            height={130}
            alt="profile" 
        />
        <div className="z-30">
            <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">Software Engineer</h2>
            <h1 className="font-bold mr-3 text-5xl lg:text-6xl px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>        

            <div className="pt-5">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>

        </div>
    </div>
  )
}