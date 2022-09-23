import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
// import sanityClientt from '@sanity/client'

// export const sanityClient = sanityClientt({
//     dataset: 'production',
//     projectId: 'ozf66dei',
//     apiVersion: '2021-10-21', // use current UTC date - see "specifying API version"!
//     token: 'sksnX3My6cTDiLR5iOJgwunG0glym5yWsDz5czr060OPRU061chlZaMJqyBkLhRvCgsOYiKKIQCkPfnVlxk0YyF0un7AESLdHAW2tOPYubhud7VeSbu5yokQhqh4xLyD1y9aehEsG4V8BM1MoWeTyhixSg1bKwvV11Bwdamlih1WTL0IQ9fq', // or leave blank for unauthenticated usage
//     useCdn: process.env.NODE_ENV === "production", // `false` if you want to ensure fresh data
//   })
  
const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: "ozf66dei", 
    // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    // apiVersion: "2021-03-25",
    apiVersion: "2021-10-21",
    // apiVersion: "v1",
    useCdn: process.env.NODE_ENV === "production",
    token: 'sksnX3My6cTDiLR5iOJgwunG0glym5yWsDz5czr060OPRU061chlZaMJqyBkLhRvCgsOYiKKIQCkPfnVlxk0YyF0un7AESLdHAW2tOPYubhud7VeSbu5yokQhqh4xLyD1y9aehEsG4V8BM1MoWeTyhixSg1bKwvV11Bwdamlih1WTL0IQ9fq', // or leave blank for unauthenticated usage
}
console.log('configggg', config)

// setup the client for fetching data in the getProps page function
// export const sanityClient
export const sanityClient = createClient(config)


// @ts-ignore:next-line
// export const urlFor = (source: any) => createImageUrlBuilder(sanityClient).image(source)
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)
