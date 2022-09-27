import React, { forwardRef } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo | null | undefined,
}

export default forwardRef(function Hero({ pageInfo }: Props, ref: any) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, I'm ${pageInfo?.name}`,
            "React, Nextjs, TS, JS..",
            "Nodejs, Vuejs",
            "<💻️ && !☕️>",
        ],
        loop: true,
        delaySpeed: 2000
       })
  return (
    <div ref={ref} className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
        <BackgroundCircles />
            <Image
                src={urlFor(pageInfo?.heroImage).url()}  
                className="object-cover w-32 h-32 rounded-full"
                width={130}
                height={130}
                alt="profile" 
            />
        <div className="z-30">
            <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">{pageInfo?.role}</h2>
            <h1 className="px-10 mr-3 text-3xl font-bold md:text-5xl lg:text-6xl">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#0EA5E9" />
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

            <div className="hidden pt-5">
                <Link href="#about">
                    <button className="heroButton">CV</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Articles</button>
                </Link>
            </div>

        </div>
    </div>
  )
})