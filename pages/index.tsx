import Head from 'next/head';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mertens Tours | Exciting tours for adventurous people</title>
        <meta
          name='description'
          content='Book your next adventure. Hike in the most amazing places in Germany'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />
    </>
  );
}
