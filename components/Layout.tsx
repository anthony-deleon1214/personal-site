import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from './Sidebar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>Anthony Deleon</title>
    </Head>
    <Sidebar></Sidebar>
  </div>
)

export default Layout
