import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Page 1</title>
      </Head>

      <div className='min-h-screen bg-background'>
        <main className=' m-auto flex min-h-screen max-w-5xl flex-col justify-center gap-8 py-10 text-sm text-white'>
          <p>Page 1</p>
          <div>
            <Link href={'/page_2'}>page_2</Link>
          </div>
        </main>
      </div>
    </>
  );
}
