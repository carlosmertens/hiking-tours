import '../styles/main.scss';
import '../styles/icon-font.css';
import { Lato } from '@next/font/google';
import type { AppProps } from 'next/app';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={lato.className}>
      <Component {...pageProps} />
    </div>
  );
}
