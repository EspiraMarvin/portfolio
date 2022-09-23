import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };


type Props = {}

export default function ContactMe({}: Props) {
    const regex = /(.|\s)*\S(.|\s)*/
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        if (!regex.test(formData.name) && 
            !regex.test(formData.email) &&
            !regex.test(formData.message) &&
            !regex.test(formData.subject)
        )
        return
        window.location.href= `mailto:espiramarvin@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

  return (
    <div className="relative flex flex-col items-center h-screen min-w-full px-10 mx-auto md:flex-row justify-evenly">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>

        <div className="flex flex-col space-y-10">
            <h4 className="text-xl font-semibold text-center md:text-2xl lg:text-3xl 2xl:text-4xl">
            I have got what you need.{" "}
            <span className="underline decoration-[#F7AB0A]">{" "} Let`s Talk.</span>
            </h4>
            
            <div className="flex flex-col items-start px-16 ml-6 space-y-4 text-center md:px-0">
                <div className="flex items-center justify-center space-x-5">
                    <PhoneIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
                    <p>+254791425789</p>
                </div>

                <div className="flex items-center justify-center space-x-5">
                    <MapPinIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
                    <p>Nairobi, Kenya</p>
                </div>

                <div className="flex items-center justify-center space-x-5">
                    <EnvelopeIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
                    <p>espiramarvin@gmail.com</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-auto space-y-2 min-w-fit ">
                <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
                    <input {...register('name')} placeholder="Name"  className="contactInput" type="text" />
                    <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                </div>
                <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
                <textarea  {...register('message')} placeholder="Message" className="contactInput" name="" id="" ></textarea>
                <button type="submit" className="bg-[#F7AB0A] py-3.5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
            </form>


        </div>
    </div>
  )
}