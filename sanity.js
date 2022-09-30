import { createCurrentUserHook } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = require('@sanity/client');
export const client = sanityClient(config)

//Helper function for generating image url using asset reference data
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);

//Helper function to use curreently logged in user account
export const useCurrentUser = createCurrentUserHook(config)