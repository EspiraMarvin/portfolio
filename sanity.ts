import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PORJECT_ID,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
}

// setup the client for fetching data in the getProps page function
export const sanityClient = createClient(config)

// @ts-ignore ignore config error
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)