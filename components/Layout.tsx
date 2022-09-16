import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from './Sidebar'
import Biocard from './Biocard';
import PostGrid from './PostGrid';

const Layout = () => (
  <div className='layout'>
    <Head>
      <title>Anthony Deleon</title>
    </Head>
    <Sidebar></Sidebar>
    <PostGrid></PostGrid>
    <Biocard></Biocard>
  </div>
)

export default Layout;