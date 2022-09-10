import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from './Sidebar'
import Biocard from './Biocard';

const Layout = () => (
  <div>
    <Head>
      <title>Anthony Deleon</title>
    </Head>
    <Sidebar></Sidebar>
    <Biocard></Biocard>
  </div>
)

export default Layout;