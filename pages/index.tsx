import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mertens Tours | Exciting tours for adventurous people</title>
        <meta
          name='description'
          content='Book your next adventure. Hike in the most amazing places in Germany'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main>
        <h1>Welcome to Mertens Tours!</h1>
      </main>
    </div>
  );
}
