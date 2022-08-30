import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Switcher Shopping Cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Switcher</h1>
      </div>
    </Layout>
  );
};

export default Home;
