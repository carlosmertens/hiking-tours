import Head from 'next/head';
import { GridLayouts } from '../components/GridLayouts';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hiking Tours | Exciting tours for adventurous people</title>
        <meta
          name='description'
          content='Book your next adventure. Hike in the most amazing places in Germany'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png'></link>
      </Head>

      {/* <Header /> */}
      <GridLayouts />
    </>
  );
}
