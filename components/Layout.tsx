import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from './Sidebar'
import Biocard from './Biocard';
import PostGrid from './PostGridContainer';
import PostGridContainer from './PostGridContainer';

const Layout = () => (
  <div className='layout'>
    <Head>
      <title>Anthony Deleon</title>
    </Head>
    <Sidebar></Sidebar>
    <PostGridContainer>
      <PostGrid></PostGrid>
    </PostGridContainer>
    <Biocard></Biocard>
  </div>
);

export default Layout;