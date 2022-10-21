import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from './Sidebar'
import Biocard from './Biocard';
import PostGridContainer from './PostGridContainer';
import { Post } from '../typings';

interface Props {
  posts: [Post];
}

export default function Layout({ posts }: Props) {
  return (
  <div className='layout'>
    <Head>
      <title>Anthony Deleon</title>
    </Head>
    <Sidebar></Sidebar>
    <PostGridContainer posts={posts}></PostGridContainer>
    <Biocard post={posts[0]}></Biocard>
  </div>
  )
}