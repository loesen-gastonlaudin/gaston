import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Page 2</title>
      </Head>

      <div className='min-h-screen bg-background'>
        <main className=' m-auto flex min-h-screen max-w-5xl flex-col justify-center gap-8 py-10 text-sm text-white'>
          <p>Page 2</p>
        </main>
      </div>
    </>
  );
}
