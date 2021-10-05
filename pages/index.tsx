import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import ProjectGrid from '../components/ProjectGrid';
import ProjectSquare from '../components/ProjectSquare';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center w-full">
        <ProjectGrid />
      </div>
    </Layout>
  );
};

export default Home;
