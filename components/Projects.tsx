import React, { useRef, useLayoutEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import Image from 'next/image'
import { ChevronRightIcon, ChevronLeftIcon  } from "@heroicons/react/24/solid"

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    const ref = useRef<HTMLDivElement |  null>(null)
    const [scrollX, setScrollX] = useState<number>(0);
    const [clientWidth, setClientWidth] = useState<number>();
    const [scrolEnd, setscrolEnd] = useState(false);

    const handleScrollRight = (direction: string) => {
        if (ref.current !== null && clientWidth !== undefined) {
            direction === 'left' ? ref.current.scrollLeft += -clientWidth : ref.current.scrollLeft += clientWidth;
        }
    }

    const scrollCheck = () => {
        if (ref.current !== null) {
            setScrollX(ref.current.scrollLeft);
            if (
              Math.floor(ref.current.scrollWidth - ref.current.scrollLeft) <= ref.current.offsetWidth
            ) {
              setscrolEnd(true);
            } else {
              setscrolEnd(false);
            }   
        }
      };

    useLayoutEffect(() => {
        if (ref.current !== null){
            setClientWidth(ref.current.getBoundingClientRect().width);
        }
    }, [clientWidth])
    

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
     className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl'>
            Projects
        </h3>

        <div ref={ref} onScroll={scrollCheck} className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory appScrollbar scroll-smooth">
            { projects.map((project, index) => (
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-10 space-y-5 snap-center md:p-44" key={project._id}>
                    <motion.img 
                    initial={{
                        y: -300,
                        opacity: 0
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src={urlFor(project?.image).url()}
                      className="h-80 xl:h-72 2xl:h-80 w-[500px] object-cover" 
                    />

                    <div className="relative max-w-6xl px-0 space-y-10 md:px-10">
                        <h4 className="text-2xl font-semibold text-center md:text-3xl 2xl:text-4xl">
                            <span className="underline decoration-[#0EA5E9]/50 text-xs text-gray-400"> 
                            {index + 1} of <span className='text-[#0EA5E9]/50'>{projects.length}</span>
                        </span> {' '}
                        <a target="_blank" href={project?.linkToBuild}  rel="noopener noreferrer">
                            <span className="cursor-pointer hover:text-gray-50 hover:underline hover:decoration-white animate-pulse">{ project?.title }</span>
                        </a>
                        </h4>
                    

                        <div className="flex items-center justify-center gap-x-4">
                            {project?.technologies.map(tech => (
                                <div key={tech._id}>
                                    <Image
                                        key={tech._id}
                                        src={urlFor(tech?.image).url()} 
                                        width={32}
                                        height={32}
                                        alt="tech"
                                />
                                </div>
                            ))}
                        </div>

                        <p className="text-center md:text-lg md:text-left">
                            { project?.summary }
                        </p>
                        
                    </div>
                </div>
            ))}
        </div>

          {/* scroll btns */}
            { scrollX !== 0 &&
                <ChevronLeftIcon onClick={() => handleScrollRight('left')}  className="absolute z-40 w-10 h-10 text-gray-300 cursor-pointer hover:text-gray-50 left-1 md:left-10" /> 
            }
            { !scrolEnd &&
                <ChevronRightIcon onClick={() => handleScrollRight('right')} className="absolute z-40 w-10 h-10 cursor-pointer right-1 md:right-10 text-gray-30 hover:text-gray-50" />
            }

         {/* background skew color */}
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}