import React, { useRef, useState } from 'react'

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { useInView } from 'react-intersection-observer';

import emailjs from '@emailjs/browser';
import toast, { Toaster }  from 'react-hot-toast';


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };


type Props = {}

export default function ContactMe({}: Props) {
    // check white spaces
    const regex = /(.|\s)*\S(.|\s)*/ 
    const { register, watch, setFocus, handleSubmit, formState: { errors } } = useForm<Inputs>();
    /* 
       const watchAllFields = watch()  
       console.log('watchAllFields', watchAllFields)
    */

    const formRef = useRef<any>();
    const [loading, setLoading] = useState(false)

    const notifySuccess = () => toast.success('Email sent. Marvin will be in touch soon.');

    const notifyError = (error:any) => toast.error(`${error?.text}`);


    const onSubmit: SubmitHandler<Inputs> = async() => {
        try {
            const res = await sendEmail()
            notifySuccess()
            setLoading(false)
        }catch(error:any){
            notifyError(error?.text)
        }
    };

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });

    const sendEmail = async () => {
        try {
            setLoading(true)
            const result = emailjs.sendForm('service_v8zqt9v', 'template_wjufyjs', formRef.current , 'gnAbFlwcVBjiAJNLU') 
            return result
        } catch(error:any) {
            setLoading(false)
            return error?.text
        }
    }

  return (
    <div className="relative flex flex-col items-center h-screen min-w-full px-10 mx-auto md:flex-row justify-evenly">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl">Contact</h3>

        <div className="flex flex-col space-y-10">
            <h4 className="text-lg font-semibold text-center md:text-2xl lg:text-3xl 2xl:text-4xl">
            I have got what you need.{" "}
            <span className="underline decoration-[#7dd3fc]">{" "} Let`s Talk.</span>
            </h4>
            
            <div className="flex flex-col items-start px-16 ml-6 space-y-4 text-center md:px-0">
                <div className="flex items-center justify-center space-x-5">
                    <PhoneIcon className="h-7 w-7 text-[#0EA5E9] animate-pulse" />
                    <p>+254791425789</p>
                </div>

                <div className="flex items-center justify-center space-x-5">
                    <MapPinIcon className="h-7 w-7 text-[#0EA5E9] animate-pulse" />
                    <p>Nairobi, Kenya</p>
                </div>

                <div className="flex items-center justify-center space-x-5">
                    <EnvelopeIcon className="h-7 w-7 text-[#0EA5E9] animate-pulse" />
                    <p>espiramarvin@gmail.com</p>
                </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-auto space-y-2 min-w-fit">
                <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
                    <div>
                        <input {...register('name', { required: true })} placeholder="Name" name="name" className="contactInput" type="text" />
                        {errors.name && (
                            <p className="flex flex-col p-1 text-[13px] font-light text-orange-500 z-50">
                                Name required.
                            </p>
                        )}
                    </div>
                    <div>
                        <input {...register('email', { required: true })} placeholder="Email" name="email" className="contactInput"  type="email" />
                        {errors.email && (
                            <p className="flex flex-col p-1 text-[13px] font-light text-orange-500 z-50">
                                Email required.
                            </p>
                        )}
                    </div>

                </div>
                <input {...register('subject', { required: true })} placeholder="Subject" name="subject" className="contactInput" type="text" />
                {errors.subject && (
                    <p className="flex flex-col p-1 text-[13px] font-light text-orange-500 z-50">
                        Subject required.
                    </p>
                )}
                <textarea  {...register('message', { required: true })} placeholder="Message" name="message" className="contactInput" ></textarea>
                {errors.subject && (
                    <p className="flex flex-col p-1 text-[13px] font-light text-orange-500 z-50">
                        Message required.
                    </p>
                )}
                <button type="submit" className="bg-[#0EA5E9] py-3.5 px-10 rounded-md text-black font-bold text-lg">{loading ? 'Loading...' :'Submit'}</button>
            </form>
            <Toaster position="bottom-center" />
        </div>
    </div>
  )
}
