import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/public/favicon.png' />
        <link rel='apple-touch-icon' href='/public/logo-green-small-1x.png' />
      </Head>
      <body>
        <Main></Main>
        <NextScript />
      </body>
    </Html>
  );
}
