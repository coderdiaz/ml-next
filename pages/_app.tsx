import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import 'tailwindcss/tailwind.css';
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}