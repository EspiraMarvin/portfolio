import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
  
const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: "ozf66dei", 
    apiVersion: "2021-10-21",
    useCdn: process.env.NODE_ENV === "production",
}


// setup the client for fetching data in the getProps page function
// export const sanityClient
export const sanityClient = createClient(config)


// @ts-ignore:next-line
// export const urlFor = (source: any) => createImageUrlBuilder(sanityClient).image(source)
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)
